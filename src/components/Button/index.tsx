import { View, Text } from 'react-native';
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = RectButtonProps & {
  text: string; 
}

export function Button({ text, ...rest } : Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>
        {text}
      </Text>
    </RectButton>
  )
}