import React from 'react';
import { Text, View } from 'react-native';

interface ForecastItemProps {
  forecastTime: string;
  temperature: number;
  rainIntensity: number;
}

export const ForecastItem = ({ forecastTime, temperature, rainIntensity }: ForecastItemProps) => (
  <View>
    <Text>ForecastItem Component</Text>
    <Text>Time: {forecastTime}</Text>
    <Text>Temperature: {temperature.toFixed(1)}°C</Text>
    <Text>Rain: {rainIntensity.toFixed(1)} mm</Text>
  </View>
);
