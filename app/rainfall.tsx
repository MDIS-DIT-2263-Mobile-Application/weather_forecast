import React from 'react';
import { RainfallScreen } from '../screens/RainfallScreen';
import { useScreenNavigation } from './routeNavigation';

export default function RainfallRoute() {
  const onNavigate = useScreenNavigation();
  return <RainfallScreen onNavigate={onNavigate} />;
}
