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
      <Text style={styles.time}>{forecastTime}</Text>

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

      <View style={styles.rainContainer}>
        <Text style={styles.rainText}>
          Rain: {rainIntensity.toFixed(1)} mm
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
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  time: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 8,
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  rainContainer: {
    marginTop: 12,
  },
  rainText: {
    color: '#374151',
    fontSize: 12,
    marginBottom: 4,
  },
  rainBarBackground: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  rainBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
  },
});
