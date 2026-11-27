import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputFieldProps = {
  label: string;
  placeholder: string;
  keyboardType?: 'default' | 'email-address';
  secureTextEntry?: boolean;
};

export function InputField(props: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        accessibilityLabel={props.label}
        placeholder={props.placeholder}
        placeholderTextColor="#64748B"
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.input,
          isFocused ? styles.inputFocused : null,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    minHeight: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#64748B',
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
  },
  inputFocused: {
    fontSize: 18,
    borderColor: '#15803D',
  },
});