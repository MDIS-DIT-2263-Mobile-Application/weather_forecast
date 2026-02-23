import React from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface AssistantInputBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export const AssistantInputBox = ({ value, onChangeText, onSubmit }: AssistantInputBoxProps) => {
  const isDisabled = !value.trim();
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.label}>Assistant AI</Text>
          <Text style={styles.subtitle}>Get quick weather answers</Text>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, isDisabled && styles.inputDisabled]}
            value={value}
            onChangeText={onChangeText}
            placeholder="Ask something like “Will it rain this afternoon?”"
            placeholderTextColor="#9AA4B2"
            returnKeyType="send"
            onSubmitEditing={() => { if (!isDisabled) onSubmit(); }}
            blurOnSubmit={false}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              isDisabled && styles.buttonDisabled,
              pressed && !isDisabled && styles.buttonPressed,
            ]}
            onPress={() => { if (!isDisabled) onSubmit(); }}
            disabled={isDisabled}
          >
            <Text style={[styles.buttonText, isDisabled && styles.buttonTextDisabled]}>🔎 Ask</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#0077ff',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.06,
        shadowRadius: 18,
      },
      android: { elevation: 2 },
    }),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 12,
    color: '#64748b',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#f7fbff',
    borderRadius: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#e6eef8',
  },
  inputDisabled: {
    opacity: 0.8,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#2563eb',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    backgroundColor: '#9aa9c7',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  buttonTextDisabled: {
    color: '#f2f6fb',
  },
});
