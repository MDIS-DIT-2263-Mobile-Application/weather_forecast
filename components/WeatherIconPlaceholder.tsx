import React from 'react';
import { Text, View } from 'react-native';

interface WeatherIconPlaceholderProps {
  condition: string;
}

export const WeatherIconPlaceholder = ({ condition }: WeatherIconPlaceholderProps) => (
  <View>
    <Text>WeatherIconPlaceholder Component</Text>
    <Text>{condition}</Text>
  </View>
);
