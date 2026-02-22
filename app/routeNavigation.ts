import { useRouter, type Href } from 'expo-router';
import { useCallback } from 'react';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

const routeMap: Record<ScreenKey, Href> = {
  Home: '/',
  Forecast: '/forecast',
  Rainfall: '/rainfall',
  Assistant: '/assistant',
  LocationList: '/location-list',
  LocationDetail: '/location-detail',
  Alerts: '/alerts',
  Reminder: '/reminder',
  Settings: '/settings',
  About: '/about',
};

export const useScreenNavigation = () => {
  const router = useRouter();
  const setActiveScreen = useWeatherStore((state: WeatherState) => state.setActiveScreen);

  return useCallback(
    (screen: ScreenKey) => {
      setActiveScreen(screen);
      router.push(routeMap[screen]);
    },
    [router, setActiveScreen]
  );
};
