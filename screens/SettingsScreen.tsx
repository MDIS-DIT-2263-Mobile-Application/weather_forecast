import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { type ScreenKey } from '../store/weatherStore';

interface SettingsScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const SettingsScreen = ({ onNavigate }: SettingsScreenProps) => (
  <View>
    <Text>SettingsScreen Component</Text>
    <Text>Settings placeholder for classroom UI enhancement.</Text>
    <Button title="About" onPress={() => onNavigate('About')} />
    <Button title="Back Home" onPress={() => onNavigate('Home')} />
    <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Settings" />
  </View>
);
