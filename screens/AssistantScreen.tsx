import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { AssistantInputBox } from '../components/AssistantInputBox';
import { AssistantMessageBubble } from '../components/AssistantMessageBubble';
import { EmptyState } from '../components/EmptyState';
import { ScreenNavigationMenu } from '../components/ScreenNavigationMenu';
import { useWeatherStore, type ScreenKey, type WeatherState } from '../store/weatherStore';

interface AssistantScreenProps {
  onNavigate: (screen: ScreenKey) => void;
}

export const AssistantScreen = ({ onNavigate }: AssistantScreenProps) => {
  const [question, setQuestion] = useState('');
  const messages = useWeatherStore((state: WeatherState) => state.messages);
  const askAssistant = useWeatherStore((state: WeatherState) => state.askAssistant);
  const clearMessages = useWeatherStore((state: WeatherState) => state.clearMessages);

  const submitQuestion = () => {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }
    askAssistant(trimmed);
    setQuestion('');
  };

  return (
    <View>
      <Text>AssistantScreen Component</Text>
      <AssistantInputBox value={question} onChangeText={setQuestion} onSubmit={submitQuestion} />
      {messages.length === 0 ? <EmptyState message="No conversation yet" /> : null}
      {messages.map((item) => (
        <AssistantMessageBubble key={item.id} role={item.role} message={item.text} />
      ))}
      <Button title="Clear Chat" onPress={clearMessages} />
      <Button title="Back Home" onPress={() => onNavigate('Home')} />
      <ScreenNavigationMenu onNavigate={onNavigate} currentScreen="Assistant" />
    </View>
  );
};
