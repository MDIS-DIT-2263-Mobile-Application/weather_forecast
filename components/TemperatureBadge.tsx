import React from 'react';
import { Text, View } from 'react-native';

interface TemperatureBadgeProps {
  temperature: number;
}

export const TemperatureBadge = ({ temperature }: TemperatureBadgeProps) => (
  <View>
    <Text>TemperatureBadge Component</Text>
    <Text>{temperature.toFixed(1)}°C</Text>
  </View>
);
