import React from 'react';
import { Text, View } from 'react-native';

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => (
  <View>
    <Text>Divider Component</Text>
    <Text>{label ?? '---'}</Text>
  </View>
);
