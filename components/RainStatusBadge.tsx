import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

interface RainStatusBadgeProps {
  rainIntensity: number;
}

export const RainStatusBadge = ({ rainIntensity }: RainStatusBadgeProps) => {
  let label = 'No rain';
  if (rainIntensity > 8) {
    label = 'Heavy';
  } else if (rainIntensity > 4) {
    label = 'Moderate';
  } else if (rainIntensity > 0) {
    label = 'Light';
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold">
        {label} rain – {rainIntensity.toFixed(1)} mm
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
});
