import React from 'react';
import { ForecastScreen } from '../screens/ForecastScreen';
import { useScreenNavigation } from './routeNavigation';

export default function ForecastRoute() {
  const onNavigate = useScreenNavigation();
  return <ForecastScreen onNavigate={onNavigate} />;
}
