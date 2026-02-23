import React from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

interface AssistantInputBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export const AssistantInputBox = ({ value, onChangeText, onSubmit }: AssistantInputBoxProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>Assistant AI</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder="Ask a weather question..."
      placeholderTextColor="#888"
      // UX Enhancements
      returnKeyType="send"
      onSubmitEditing={onSubmit} 
      blurOnSubmit={false}
    />
    <Button title="Ask" onPress={onSubmit} disabled={!value.trim()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f6fbff',
    borderRadius: 12,
    margin: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#1b6bff',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.07,
        shadowRadius: 18,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#15315b',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#e6eefc',
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
    color: '#0f1724',
    padding: 0,
  },
  button: {
    marginLeft: 12,
    backgroundColor: '#3366FF',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 72,
    ...Platform.select({
      ios: {
        shadowColor: '#3366FF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: { elevation: 2 },
    }),
  },
  buttonDisabled: {
    opacity: 0.55,
    backgroundColor: '#90a4ff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  helper: {
    marginTop: 10,
    fontSize: 12,
    color: '#5b6b80',
  },
});
