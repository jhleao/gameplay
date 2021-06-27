import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function SamllInput({ ...rest } : TextInputProps) {
  return (
    <TextInput
      keyboardType='numeric'
      style={styles.input}
      {...rest}
    />
  )
}