import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { SectionHeader } from '../components/SectionHeader';
import { TemperatureBadge } from '../components/TemperatureBadge';
import { WeatherCard } from '../components/WeatherCard';
import { WeatherIconPlaceholder } from '../components/WeatherIconPlaceholder';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface HomeScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const currentWeather = useWeatherStore((state: WeatherState) => state.currentWeather);
  const isLoading = useWeatherStore((state: WeatherState) => state.isLoading);

  return (
    <View style={styles.container}>
      <SectionHeader title="Home" style={styles.header} />
      {isLoading ? <LoadingIndicator label="Loading weather data" style={styles.loadingIndicator} /> : null}
      <WeatherCard
        location={currentWeather?.location ?? 'Unknown'}
        temperature={currentWeather?.temperature ?? 0}
        condition={currentWeather?.condition ?? 'Unknown'}
        style={styles.weatherCard}
      />
      <TemperatureBadge temperature={currentWeather?.temperature ?? 0} style={styles.temperatureBadge} />
      <WeatherIconPlaceholder condition={currentWeather?.condition ?? 'Unknown'} style={styles.weatherIcon} />
      <Text style={styles.text}>HomeScreen Component</Text>
      <View style={styles.buttonContainer}>
        <Button title="Open Forecast" onPress={() => onNavigate('Forecast')} color="#4CAF50" />
        <Button title="Open Assistant" onPress={() => onNavigate('Assistant')} color="#2196F3" />
      </View>
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Home" style={styles.navigationMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  loadingIndicator: {
    marginVertical: 16,
  },
  weatherCard: {
    marginBottom: 16,
  },
  temperatureBadge: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  weatherIcon: {
    alignSelf: 'center',
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  navigationMenu: {
    marginTop: 16,
  },
});
