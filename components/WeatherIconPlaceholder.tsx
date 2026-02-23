import { StyleSheet, Text, View } from 'react-native';

interface WeatherIconPlaceholderProps {
  condition: string;
}

export const WeatherIconPlaceholder = ({ condition }: WeatherIconPlaceholderProps) => {
  // Logic to determine colors based on the condition prop
  const getTheme = () => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return { bg: '#FFF9C4', text: '#F57F17', accent: '#FBC02D' };
      case 'rainy':
        return { bg: '#E3F2FD', text: '#0D47A1', accent: '#1976D2' };
      case 'cloudy':
        return { bg: '#ECEFF1', text: '#455A64', accent: '#90A4AE' };
      default:
        return { bg: '#FFFFFF', text: '#333333', accent: '#E0E0E0' };
    }
  };

  const theme = getTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.bg }]}>
      <Text style={[styles.label, { color: theme.text }]}>CURRENT STATUS</Text>
      <Text style={[styles.conditionText, { color: theme.text }]}>{condition}</Text>
      <View style={[styles.indicator, { backgroundColor: theme.accent }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    margin: 10,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Android Shadow
    elevation: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 4,
    opacity: 0.7,
  },
  conditionText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  indicator: {
    marginTop: 15,
    width: 45,
    height: 6,
    borderRadius: 10,
  },
});