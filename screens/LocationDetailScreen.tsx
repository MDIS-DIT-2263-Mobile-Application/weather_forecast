import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { WeatherCard } from '../components/WeatherCard';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface LocationDetailScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const LocationDetailScreen = ({ onNavigate }: LocationDetailScreenProps) => {
  const selectedLocation = useWeatherStore((state: WeatherState) => state.selectedLocation);
  const currentWeather = useWeatherStore((state: WeatherState) => state.currentWeather);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Location Details</ThemedText>
      <ThemedText>Selected Location: {selectedLocation}</ThemedText>
      <WeatherCard
        location={currentWeather?.location ?? selectedLocation}
        temperature={currentWeather?.temperature ?? 0}
        condition={currentWeather?.condition ?? 'Unknown'}
      />
      <Button title="Back to Locations" onPress={() => onNavigate('LocationList')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="LocationDetail" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
