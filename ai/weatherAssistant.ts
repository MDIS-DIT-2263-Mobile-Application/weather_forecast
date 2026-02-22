export interface WeatherAssistantContext {
  rainIntensity: number;
  temperature: number;
  forecastTime: string;
}

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

const keywordScore = (query: string, keywords: string[]): number => {
  const normalized = query.toLowerCase();
  return keywords.reduce((total, keyword) => total + Number(normalized.includes(keyword)), 0);
};

const normalizeRain = (rainIntensity: number): number => clamp(rainIntensity / 12, 0, 1);
const normalizeTemp = (temperature: number): number => clamp(Math.abs(temperature - 26) / 14, 0, 1);

const activityLexicon: Record<string, string[]> = {
  motorcycle: ['motorcycle', 'ride', 'bike', 'scooter'],
  outdoor: ['outdoor', 'jog', 'run', 'walking', 'hiking', 'picnic'],
  travel: ['travel', 'commute', 'drive', 'trip'],
};

const activityMatch = (query: string): { label: string; weight: number } => {
  const activityScores = Object.entries(activityLexicon).map(([label, terms]) => ({
    label,
    weight: keywordScore(query, terms),
  }));

  const ranked = activityScores.sort((a, b) => b.weight - a.weight);
  return ranked[0] ?? { label: 'general', weight: 0 };
};

const timeLabel = (timestamp: string): string => {
  const date = new Date(timestamp);
  const hour = Number.isFinite(date.getTime()) ? date.getHours() : 12;
  const segments = ['night', 'morning', 'afternoon', 'evening'];
  return segments[Math.floor(((hour + 3) % 24) / 6)] ?? 'day';
};

export const weatherAssistant = (query: string, context: WeatherAssistantContext): string => {
  const rainRisk = normalizeRain(context.rainIntensity);
  const temperatureVariance = normalizeTemp(context.temperature);
  const activity = activityMatch(query);

  const comfortIndex = clamp(1 - (rainRisk * 0.7 + temperatureVariance * 0.3), 0, 1);
  const suitabilityIndex = clamp(
    comfortIndex - rainRisk * 0.35 - Number(activity.label === 'motorcycle') * rainRisk * 0.25,
    0,
    1
  );

  const suitabilityBand = ['not suitable', 'possible with caution', 'suitable'][
    clamp(Math.floor(suitabilityIndex * 3), 0, 2)
  ];

  const preparationOptions = [
    { text: 'Bring an umbrella or raincoat.', score: 0.5 + rainRisk },
    { text: 'Prefer indoor activities and avoid long outdoor exposure.', score: 0.3 + rainRisk * 1.2 },
    { text: 'Prepare warm drinks and dry clothes for comfort.', score: 0.2 + rainRisk * 0.6 + temperatureVariance * 0.5 },
    { text: 'Keep travel plans flexible with extra buffer time.', score: 0.2 + rainRisk * 0.8 },
  ]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.text);

  const intentSignals = [
    keywordScore(query, ['prepare', 'what should i', 'bring', 'need']),
    keywordScore(query, ['suitable', 'can i', 'is it', 'safe']),
  ];

  const responseMode = clamp(intentSignals[1] - intentSignals[0] + 1, 0, 2);
  const modeText = [
    'Preparation guidance',
    'Balanced guidance',
    'Suitability guidance',
  ][responseMode];

  return [
    `${modeText} for ${timeLabel(context.forecastTime)} forecast:`,
    `- Estimated suitability: ${suitabilityBand}.`,
    `- Weather context: ${context.temperature.toFixed(1)}°C and rain intensity ${context.rainIntensity.toFixed(1)} mm.`,
    `- Recommended actions: ${preparationOptions.join(' ')}`,
  ].join('\n');
};
