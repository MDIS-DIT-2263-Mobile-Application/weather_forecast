import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { WeatherCard } from '../components/WeatherCard';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface LocationDetailScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const LocationDetailScreen = ({ onNavigate }: LocationDetailScreenProps) => {
  const selectedLocation = useWeatherStore((state: WeatherState) => state.selectedLocation);
  const currentWeather = useWeatherStore((state: WeatherState) => state.currentWeather);

  return (
    <View>
      <Text>LocationDetailScreen Component</Text>
      <Text>Selected Location: {selectedLocation}</Text>
      <WeatherCard
        location={currentWeather?.location ?? selectedLocation}
        temperature={currentWeather?.temperature ?? 0}
        condition={currentWeather?.condition ?? 'Unknown'}
      />
      <Button title="Back to Locations" onPress={() => onNavigate('LocationList')} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="LocationDetail" />
    </View>
  );
};
