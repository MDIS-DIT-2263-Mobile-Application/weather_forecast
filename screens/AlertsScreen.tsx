import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { RainAlertBanner } from '../components/RainAlertBanner';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SuggestionCard } from '../components/SuggestionCard';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface AlertsScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const AlertsScreen = ({ onNavigate }: AlertsScreenProps) => {
  const currentWeather = useWeatherStore((state: WeatherState) => state.currentWeather);
  const rain = currentWeather?.rainIntensity ?? 0;
  const alertMessage = rain > 8 ? 'Heavy rain expected soon' : 'No severe rain alert';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Alerts</ThemedText>
      <RainAlertBanner message={alertMessage} />
      <SuggestionCard suggestion="Check transport plans before leaving." />
      <SuggestionCard suggestion="Keep a compact umbrella in your bag." />
      <Button title="Open Reminder" onPress={() => onNavigate('Reminder')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Alerts" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
