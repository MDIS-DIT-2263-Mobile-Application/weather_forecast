import React from 'react';
import { Button, Text, View } from 'react-native';
import { type ScreenKey } from '../store/weatherStore';

interface ScreenNavigationMenuProps {
  onNavigate: (screen: ScreenKey) => void;
  currentScreen: ScreenKey;
}

const screens: ScreenKey[] = [
  'Home',
  'Forecast',
  'Rainfall',
  'Assistant',
  'LocationList',
  'LocationDetail',
  'Alerts',
  'Reminder',
  'Settings',
  'About',
];

export const ScreenNavigationMenu = ({ onNavigate, currentScreen }: ScreenNavigationMenuProps) => (
  <View>
    <Text>Screen Navigation Menu</Text>
    {screens.map((screen) => (
      <Button
        key={screen}
        title={screen}
        onPress={() => onNavigate(screen)}
        disabled={screen === currentScreen}
      />
    ))}
  </View>
);
