import React from 'react';
import { Text, View } from 'react-native';

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
}

export const WeatherCard = ({ location, temperature, condition }: WeatherCardProps) => (
  <View>
    <Text>WeatherCard Component</Text>
    <Text>Location: {location}</Text>
    <Text>Temperature: {temperature.toFixed(1)}°C</Text>
    <Text>Condition: {condition}</Text>
  </View>
);
