import { useCallback, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  style?: ViewStyle;
}
export const SearchBar = ({
  value,
  onChangeText,
  placeholder = 'Search city, zip or station...',
  onSubmit,
  style,
}: SearchBarProps) => {
  const [focused, setFocused] = useState(false);

  const handleClear = useCallback(() => onChangeText(''), [onChangeText]);

  return (
    <View style={[styles.wrapper, focused && styles.wrapperFocused, style]}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Search"
        activeOpacity={0.85}
        style={styles.iconButton}
        onPress={() => onSubmit && onSubmit()}
      >
        <Text style={styles.icon}>🔍</Text>
      </TouchableOpacity>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={() => onSubmit && onSubmit()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        accessible
        accessibilityLabel="Search input"
      />

      {value.length > 0 ? (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Clear search"
          onPress={handleClear}
          style={styles.clearButton}
        >
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create<{
  wrapper: ViewStyle;
  wrapperFocused: ViewStyle;
  iconButton: ViewStyle;
  icon: TextStyle;
  input: TextStyle;
  clearButton: ViewStyle;
  clearText: TextStyle;
}>({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginHorizontal: 12,
    // shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.18,
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  wrapperFocused: {
    transform: [{ translateY: -2 }],
    ...Platform.select({
      ios: { shadowOpacity: 0.28, shadowRadius: 20 },
      android: { elevation: 10 },
    }),
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },
  icon: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 20,
  },
  input: {
    flex: 1,
    color: '#eef2ff',
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  clearButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  clearText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    lineHeight: 18,
  },
});

export default SearchBar;
