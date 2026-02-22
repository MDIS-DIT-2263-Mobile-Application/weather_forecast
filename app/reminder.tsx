import React from 'react';
import { ReminderScreen } from '../screens/ReminderScreen';
import { useScreenNavigation } from './routeNavigation';

export default function ReminderRoute() {
  const onNavigate = useScreenNavigation();
  return <ReminderScreen onNavigate={onNavigate} />;
}
