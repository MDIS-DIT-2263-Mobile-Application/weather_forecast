import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { type ScreenKey } from '../store/weatherStore';

interface SettingsScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const SettingsScreen = ({ onNavigate }: SettingsScreenProps) => (
  <ThemedView style={styles.container}>
    <ThemedText type="title">Settings</ThemedText>
    <ThemedText>Settings placeholder for classroom UI enhancement.</ThemedText>
    <Button title="About" onPress={() => onNavigate('About')} />
    <Button title="Back Home" onPress={() => onNavigate('Home')} />
    <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Settings" />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
