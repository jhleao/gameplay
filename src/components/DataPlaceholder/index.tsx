import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View, Text
} from 'react-native';

import { styles } from './styles';
import { theme } from '@globals/styles/theme';

type Props = {
  title: string,
  subtitle: string,
}

export function DataPlaceholder({ title, subtitle }: Props){
  return (
    <View style={styles.container}>
      <Feather 
        name='inbox'
        color={theme.colors.highlight}
        size={80}
      />
      <Text style={styles.title}> { title } </Text>
      <Text style={styles.subtitle}> { subtitle } </Text>
    </View>
  );
}