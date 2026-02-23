import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { PreparationItem } from '../components/PreparationItem';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SectionHeader } from '../components/SectionHeader';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { type ScreenKey } from '../store/weatherStore';

interface ReminderScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const ReminderScreen = ({ onNavigate }: ReminderScreenProps) => {
  const reminders = ['Umbrella', 'Raincoat', 'Warm drink flask'];

  return (
    <ThemedView style={styles.container}>
      <SectionHeader title="Reminder" />
      <ThemedText>Don't forget to take:</ThemedText>
      {reminders.map((item) => (
        <PreparationItem key={item} item={item} />
      ))}
      <Button title="Back Alerts" onPress={() => onNavigate('Alerts')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Reminder" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
