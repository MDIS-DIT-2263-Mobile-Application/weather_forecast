import React from 'react';
import { Text, View } from 'react-native';

interface PreparationItemProps {
  item: string;
}

export const PreparationItem = ({ item }: PreparationItemProps) => (
  <View>
    <Text>PreparationItem Component</Text>
    <Text>{item}</Text>
  </View>
);
