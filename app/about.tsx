import React from 'react';
import { AboutScreen } from '../screens/AboutScreen';
import { useScreenNavigation } from './routeNavigation';

export default function AboutRoute() {
  const onNavigate = useScreenNavigation();
  return <AboutScreen onNavigate={onNavigate} />;
}
