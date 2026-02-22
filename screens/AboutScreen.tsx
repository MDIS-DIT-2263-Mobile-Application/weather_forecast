import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { type ScreenKey } from '../store/weatherStore';

interface AboutScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const AboutScreen = ({ onNavigate }: AboutScreenProps) => (
  <View>
    <Text>AboutScreen Component</Text>
    <Text>Interactive Weather Forecast Application with On-Device AI Assistant.</Text>
    <Text>Designed for UI/UX and component-based learning activities.</Text>
    <Button title="Back Home" onPress={() => onNavigate('Home')} />
    <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="About" />
  </View>
);
