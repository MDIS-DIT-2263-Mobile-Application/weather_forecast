import React, { useMemo, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SearchBar } from '../components/SearchBar';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface LocationListScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

const locations = ['Kuala Lumpur', 'Johor', 'Penang', 'Sabah', 'Sarawak'];

export const LocationListScreen = ({ onNavigate }: LocationListScreenProps) => {
  const [search, setSearch] = useState('');
  const setSelectedLocation = useWeatherStore((state: WeatherState) => state.setSelectedLocation);

  const filtered = useMemo(
    () => locations.filter((item) => item.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const chooseLocation = (location: string) => {
    setSelectedLocation(location);
    onNavigate('LocationDetail');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Select Location</ThemedText>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search location" />
      {filtered.map((location) => (
        <Button key={location} title={location} onPress={() => chooseLocation(location)} />
      ))}
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="LocationList" />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
