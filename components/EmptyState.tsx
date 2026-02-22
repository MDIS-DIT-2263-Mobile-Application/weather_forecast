import React from 'react';
import { Text, View } from 'react-native';

interface EmptyStateProps {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => (
  <View>
    <Text>EmptyState Component</Text>
    <Text>{message}</Text>
  </View>
);
