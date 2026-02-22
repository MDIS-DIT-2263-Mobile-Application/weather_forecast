import React from 'react';
import { AlertsScreen } from '../screens/AlertsScreen';
import { useScreenNavigation } from './routeNavigation';

export default function AlertsRoute() {
  const onNavigate = useScreenNavigation();
  return <AlertsScreen onNavigate={onNavigate} />;
}
