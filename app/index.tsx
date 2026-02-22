import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { useScreenNavigation } from './routeNavigation';

export default function HomeRoute() {
  const onNavigate = useScreenNavigation();
  return <HomeScreen onNavigate={onNavigate} />;
}
