import { styles } from './styles';
import React from 'react'
import { View, Text } from 'react-native';

type Props = {
  title: string;
  subtitle: string;
  isCentered?: boolean;
}

export function ListHeader({ title, subtitle, isCentered } : Props) {

  return (
    <View 
      style={styles.container}    > 
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}