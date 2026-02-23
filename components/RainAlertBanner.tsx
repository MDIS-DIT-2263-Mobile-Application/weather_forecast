import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

interface RainAlertBannerProps {
  message: string;
}

export const RainAlertBanner = ({ message }: RainAlertBannerProps) => (
  <ThemedView
    style={styles.container}
    lightColor={Colors.light.tint}
    darkColor={Colors.dark.tint}
  >
    <ThemedText type="defaultSemiBold" style={styles.text}>
      {message}
    </ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
