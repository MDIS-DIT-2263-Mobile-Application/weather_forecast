import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SectionHeader } from '../components/SectionHeader';
import { TemperatureBadge } from '../components/TemperatureBadge';
import { WeatherCard } from '../components/WeatherCard';
import { WeatherIconPlaceholder } from '../components/WeatherIconPlaceholder';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface HomeScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const currentWeather = useWeatherStore((state: WeatherState) => state.currentWeather);
  const isLoading = useWeatherStore((state: WeatherState) => state.isLoading);

  return (
    <ThemedView style={styles.container}>
      <SectionHeader title="Home" />
      {isLoading ? <LoadingIndicator label="Loading weather data" /> : null}
      <WeatherCard
        location={currentWeather?.location ?? 'Unknown'}
        temperature={currentWeather?.temperature ?? 0}
        condition={currentWeather?.condition ?? 'Unknown'}
      />
      <TemperatureBadge temperature={currentWeather?.temperature ?? 0} />
      <WeatherIconPlaceholder condition={currentWeather?.condition ?? 'Unknown'} />
      <Button title="Open Forecast" onPress={() => onNavigate('Forecast')} />
      <Button title="Open Assistant" onPress={() => onNavigate('Assistant')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Home" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
