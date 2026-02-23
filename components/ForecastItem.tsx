import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ForecastItemProps {
  forecastTime: string;
  temperature: number;
  rainIntensity: number;
}

export const ForecastItem = ({ forecastTime, temperature, rainIntensity }: ForecastItemProps) => (
  <ThemedView style={styles.container}>
    <ThemedText>{forecastTime}</ThemedText>
    <ThemedText>Temp: {temperature.toFixed(1)}°C</ThemedText>
    <ThemedText>Rain: {rainIntensity.toFixed(1)} mm</ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
