import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { EmptyState } from '../components/EmptyState';
import { ForecastItem } from '../components/ForecastItem';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SectionHeader } from '../components/SectionHeader';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface ForecastScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const ForecastScreen = ({ onNavigate }: ForecastScreenProps) => {
  const forecast = useWeatherStore((state: WeatherState) => state.forecast);

  return (
    <ThemedView style={styles.container}>
      <SectionHeader title="Forecast" />
      {forecast.length === 0 ? <EmptyState message="No forecast data" /> : null}
      {forecast.map((item) => (
        <ForecastItem
          key={item.forecastTime}
          forecastTime={item.forecastTime}
          temperature={item.temperature}
          rainIntensity={item.rainIntensity}
        />
      ))}
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Forecast" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
