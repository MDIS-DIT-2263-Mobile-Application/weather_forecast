import React from 'react';
import { AssistantScreen } from '../screens/AssistantScreen';
import { useScreenNavigation } from './routeNavigation';

export default function AssistantRoute() {
  const onNavigate = useScreenNavigation();
  return <AssistantScreen onNavigate={onNavigate} />;
}
