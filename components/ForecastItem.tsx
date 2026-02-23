import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ForecastItemProps {
  forecastTime: string;
  temperature: number;
  rainIntensity: number;
}

export const ForecastItem = ({
  forecastTime,
  temperature,
  rainIntensity,
}: ForecastItemProps) => {
  const isRaining = rainIntensity > 0;

  return (
    <View style={styles.card}>
      {/* Time */}
      <Text style={styles.time}>{forecastTime}</Text>

      {/* Middle Section */}
      <View style={styles.middle}>
        <Ionicons
          name={isRaining ? 'rainy' : 'partly-sunny'}
          size={28}
          color={isRaining ? '#4DA6FF' : '#FDB813'}
        />

        <Text style={styles.temperature}>
          {temperature.toFixed(1)}°C
        </Text>
      </View>

      {/* Rain Info */}
      <View style={styles.rainContainer}>
        <Text style={styles.rainText}>
          {rainIntensity.toFixed(1)} mm
        </Text>
        <View style={styles.rainBarBackground}>
          <View
            style={[
              styles.rainBar,
              { width: `${Math.min(rainIntensity * 10, 100)}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E2E',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  time: {
    color: '#A0A0B0',
    fontSize: 14,
    marginBottom: 8,
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rainContainer: {
    marginTop: 12,
  },
  rainText: {
    color: '#CCCCCC',
    fontSize: 12,
    marginBottom: 4,
  },
  rainBarBackground: {
    height: 6,
    backgroundColor: '#2E2E3E',
    borderRadius: 4,
    overflow: 'hidden',
  },
  rainBar: {
    height: '100%',
    backgroundColor: '#4DA6FF',
  },
});
