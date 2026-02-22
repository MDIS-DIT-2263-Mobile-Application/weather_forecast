import React from 'react';
import { Text, View } from 'react-native';

interface RainStatusBadgeProps {
  rainIntensity: number;
}

export const RainStatusBadge = ({ rainIntensity }: RainStatusBadgeProps) => (
  <View>
    <Text>RainStatusBadge Component</Text>
    <Text>Rain Intensity: {rainIntensity.toFixed(1)} mm</Text>
  </View>
);
