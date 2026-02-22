import React from 'react';
import { Button, Text, View } from 'react-native';
import { Divider } from '../components/Divider';
import { EmptyState } from '../components/EmptyState';
import { RainAlertBanner } from '../components/RainAlertBanner';
import { RainStatusBadge } from '../components/RainStatusBadge';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface RainfallScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const RainfallScreen = ({ onNavigate }: RainfallScreenProps) => {
  const rainfall = useWeatherStore((state: WeatherState) => state.rainfall);
  const topRain = rainfall[0]?.rainIntensity ?? 0;
  const alertText = topRain > 6 ? 'High rainfall expected' : 'Rainfall currently manageable';

  return (
    <View>
      <Text>RainfallScreen Component</Text>
      <RainAlertBanner message={alertText} />
      <RainStatusBadge rainIntensity={topRain} />
      {rainfall.length === 0 ? <EmptyState message="No rainfall records" /> : null}
      {rainfall.map((entry, index) => (
        <View key={`${entry.forecastTime}-${index}`}>
          <Text>{entry.location}</Text>
          <Text>{entry.forecastTime}</Text>
          <Text>{entry.rainIntensity.toFixed(1)} mm</Text>
          <Divider />
        </View>
      ))}
      <Button title="Go Alerts" onPress={() => onNavigate('Alerts')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Rainfall" />
    </View>
  );
};
