import React from 'react';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useScreenNavigation } from './routeNavigation';

export default function SettingsRoute() {
  const onNavigate = useScreenNavigation();
  return <SettingsScreen onNavigate={onNavigate} />;
}
