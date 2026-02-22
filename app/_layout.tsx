import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useWeatherStore, type WeatherState } from '../store/weatherStore';

export default function RootLayout() {
  const selectedLocation = useWeatherStore((state: WeatherState) => state.selectedLocation);
  const fetchWeather = useWeatherStore((state: WeatherState) => state.fetchWeather);
  const fetchRainfall = useWeatherStore((state: WeatherState) => state.fetchRainfall);

  useEffect(() => {
    fetchWeather(selectedLocation);
    fetchRainfall(selectedLocation);
  }, [selectedLocation, fetchWeather, fetchRainfall]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="forecast" options={{ title: 'Forecast' }} />
      <Stack.Screen name="rainfall" options={{ title: 'Rainfall' }} />
      <Stack.Screen name="assistant" options={{ title: 'Assistant' }} />
      <Stack.Screen name="location-list" options={{ title: 'Locations' }} />
      <Stack.Screen name="location-detail" options={{ title: 'Location Detail' }} />
      <Stack.Screen name="alerts" options={{ title: 'Alerts' }} />
      <Stack.Screen name="reminder" options={{ title: 'Reminder' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}
