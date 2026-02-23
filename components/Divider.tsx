import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => (
  <View style={styles.container}>
    {label ? <Text style={styles.label}>{label}</Text> : <View style={styles.line} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
});
