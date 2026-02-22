import React from 'react';
import { Text, View } from 'react-native';

interface LoadingIndicatorProps {
  label?: string;
}

export const LoadingIndicator = ({ label }: LoadingIndicatorProps) => (
  <View>
    <Text>LoadingIndicator Component</Text>
    <Text>{label ?? 'Loading...'}</Text>
  </View>
);
