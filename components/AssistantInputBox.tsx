import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

interface AssistantInputBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export const AssistantInputBox = ({ value, onChangeText, onSubmit }: AssistantInputBoxProps) => (
  <View>
    <Text>AssistantInputBox Component</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Ask weather question"
    />
    <Button title="Ask" onPress={onSubmit} />
  </View>
);
