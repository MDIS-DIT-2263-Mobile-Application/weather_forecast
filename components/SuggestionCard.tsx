import React from 'react';
import { Text, View } from 'react-native';

interface SuggestionCardProps {
  suggestion: string;
}

export const SuggestionCard = ({ suggestion }: SuggestionCardProps) => (
  <View>
    <Text>SuggestionCard Component</Text>
    <Text>{suggestion}</Text>
  </View>
);
