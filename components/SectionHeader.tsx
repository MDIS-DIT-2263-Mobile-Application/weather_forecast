import React from 'react';
import { Text, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => (
  <View>
    <Text>SectionHeader Component</Text>
    <Text>{title}</Text>
  </View>
);
