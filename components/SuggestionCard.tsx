import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

interface SuggestionCardProps {
  suggestion: string;
}

export const SuggestionCard = ({ suggestion }: SuggestionCardProps) => (
  <ThemedView style={styles.container}>
    <ThemedText>{suggestion}</ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    backgroundColor: '#fafafa',
  },
});
