import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Divider } from '../components/Divider';
import { EmptyState } from '../components/EmptyState';
import { RainAlertBanner } from '../components/RainAlertBanner';
import { RainStatusBadge } from '../components/RainStatusBadge';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface RainfallScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const RainfallScreen = ({ onNavigate }: RainfallScreenProps) => {
  const rainfall = useWeatherStore((state: WeatherState) => state.rainfall);
  const topRain = rainfall[0]?.rainIntensity ?? 0;
  const alertText = topRain > 6 ? 'High rainfall expected' : 'Rainfall currently manageable';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Rainfall</ThemedText>
      <RainAlertBanner message={alertText} />
      <RainStatusBadge rainIntensity={topRain} />
      {rainfall.length === 0 ? <EmptyState message="No rainfall records" /> : null}
      {rainfall.map((entry, index) => (
        <ThemedView key={`${entry.forecastTime}-${index}`} style={styles.entry}>
          <ThemedText>{entry.location}</ThemedText>
          <ThemedText>{entry.forecastTime}</ThemedText>
          <ThemedText>{entry.rainIntensity.toFixed(1)} mm</ThemedText>
          <Divider />
        </ThemedView>
      ))}
      <Button title="Go Alerts" onPress={() => onNavigate('Alerts')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Rainfall" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  entry: {
    marginBottom: 8,
  },
});
