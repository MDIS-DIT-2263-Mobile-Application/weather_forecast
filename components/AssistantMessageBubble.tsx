import React from 'react';
import { Text, View } from 'react-native';

interface AssistantMessageBubbleProps {
  role: 'user' | 'assistant';
  message: string;
}

export const AssistantMessageBubble = ({ role, message }: AssistantMessageBubbleProps) => (
  <View>
    <Text>AssistantMessageBubble Component</Text>
    <Text>{role.toUpperCase()}: {message}</Text>
  </View>
);
