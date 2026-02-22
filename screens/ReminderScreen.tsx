import React from 'react';
import { Button, Text, View } from 'react-native';
import { PreparationItem } from '../components/PreparationItem';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SectionHeader } from '../components/SectionHeader';
import { type ScreenKey } from '../store/weatherStore';

interface ReminderScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const ReminderScreen = ({ onNavigate }: ReminderScreenProps) => {
  const reminders = ['Umbrella', 'Raincoat', 'Warm drink flask'];

  return (
    <View>
      <SectionHeader title="Reminder" />
      <Text>ReminderScreen Component</Text>
      {reminders.map((item) => (
        <PreparationItem key={item} item={item} />
      ))}
      <Button title="Back Alerts" onPress={() => onNavigate('Alerts')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Reminder" />
    </View>
  );
};
