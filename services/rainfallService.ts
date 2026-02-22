export interface RainfallEntry {
  location: string;
  rainIntensity: number;
  forecastTime: string;
}

const parseNumeric = (value: unknown): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const fetchRainfallData = async (location: string): Promise<RainfallEntry[]> => {
  const endpoint = `https://api.data.gov.my/weather/rainfall?contains=${encodeURIComponent(location)}`;

  const response = await fetch(endpoint);
  const payload = (await response.json()) as Array<Record<string, unknown>>;

  const records = (Array.isArray(payload) ? payload : [])
    .slice(0, 6)
    .map((entry) => ({
      location: String(entry.location_name ?? location),
      rainIntensity: parseNumeric(entry.value ?? entry.rainfall ?? entry.precipitation),
      forecastTime: String(entry.datetime ?? entry.timestamp ?? new Date().toISOString()),
    }));

  return records;
};
