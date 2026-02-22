import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChangeText, placeholder }: SearchBarProps) => (
  <View>
    <Text>SearchBar Component</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder ?? 'Search'}
    />
  </View>
);
