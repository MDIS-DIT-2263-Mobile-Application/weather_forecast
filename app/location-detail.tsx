import React from 'react';
import { LocationDetailScreen } from '../screens/LocationDetailScreen';
import { useScreenNavigation } from './routeNavigation';

export default function LocationDetailRoute() {
  const onNavigate = useScreenNavigation();
  return <LocationDetailScreen onNavigate={onNavigate} />;
}
