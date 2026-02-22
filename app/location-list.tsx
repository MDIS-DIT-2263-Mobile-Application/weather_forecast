import React from 'react';
import { LocationListScreen } from '../screens/LocationListScreen';
import { useScreenNavigation } from './routeNavigation';

export default function LocationListRoute() {
  const onNavigate = useScreenNavigation();
  return <LocationListScreen onNavigate={onNavigate} />;
}
