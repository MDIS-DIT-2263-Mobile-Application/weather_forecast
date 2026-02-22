export type WeatherCondition =
  | 'Clear'
  | 'Cloudy'
  | 'Rain'
  | 'Heavy Rain'
  | 'Thunderstorm'
  | 'Unknown';

export interface CurrentWeatherData {
  location: string;
  temperature: number;
  rainIntensity: number;
  forecastTime: string;
  condition: WeatherCondition;
  updatedAt: string;
}

export interface ForecastPoint {
  forecastTime: string;
  temperature: number;
  rainIntensity: number;
  condition: WeatherCondition;
}

const LOCATION_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
  'Kuala Lumpur': { latitude: 3.139, longitude: 101.6869 },
  Johor: { latitude: 1.4927, longitude: 103.7414 },
  Penang: { latitude: 5.4164, longitude: 100.3327 },
  Sabah: { latitude: 5.9788, longitude: 116.0753 },
  Sarawak: { latitude: 1.5533, longitude: 110.3592 },
};

const weatherCodeMap: Record<number, WeatherCondition> = {
  0: 'Clear',
  1: 'Cloudy',
  2: 'Cloudy',
  3: 'Cloudy',
  45: 'Cloudy',
  48: 'Cloudy',
  51: 'Rain',
  53: 'Rain',
  55: 'Heavy Rain',
  56: 'Rain',
  57: 'Heavy Rain',
  61: 'Rain',
  63: 'Heavy Rain',
  65: 'Heavy Rain',
  66: 'Rain',
  67: 'Heavy Rain',
  80: 'Rain',
  81: 'Heavy Rain',
  82: 'Heavy Rain',
  95: 'Thunderstorm',
  96: 'Thunderstorm',
  99: 'Thunderstorm',
};

const toCondition = (code: number): WeatherCondition => weatherCodeMap[code] ?? 'Unknown';

const resolveCoordinates = async (location: string): Promise<{ latitude: number; longitude: number }> => {
  const fallback = LOCATION_COORDINATES[location] ?? LOCATION_COORDINATES['Kuala Lumpur'];
  const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`;

  const response = await fetch(endpoint);
  const payload = (await response.json()) as {
    results?: Array<{ latitude: number; longitude: number }>;
  };

  return payload.results?.[0] ?? fallback;
};

export const fetchWeatherData = async (location: string): Promise<{
  currentWeather: CurrentWeatherData;
  forecast: ForecastPoint[];
}> => {
  const { latitude, longitude } = await resolveCoordinates(location);
  const endpoint =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,precipitation,weather_code&hourly=temperature_2m,precipitation,weather_code` +
    `&forecast_days=2&timezone=auto`;

  const response = await fetch(endpoint);
  const payload = (await response.json()) as {
    current: {
      time: string;
      temperature_2m: number;
      precipitation: number;
      weather_code: number;
    };
    hourly: {
      time: string[];
      temperature_2m: number[];
      precipitation: number[];
      weather_code: number[];
    };
  };

  const currentWeather: CurrentWeatherData = {
    location,
    temperature: payload.current.temperature_2m,
    rainIntensity: payload.current.precipitation,
    forecastTime: payload.current.time,
    condition: toCondition(payload.current.weather_code),
    updatedAt: new Date().toISOString(),
  };

  const hourlyIndices = Array.from({ length: 8 }, (_, index) => index * 3);
  const forecast: ForecastPoint[] = hourlyIndices
    .filter((index) => index < payload.hourly.time.length)
    .map((index) => ({
      forecastTime: payload.hourly.time[index],
      temperature: payload.hourly.temperature_2m[index],
      rainIntensity: payload.hourly.precipitation[index],
      condition: toCondition(payload.hourly.weather_code[index]),
    }));

  return { currentWeather, forecast };
};
