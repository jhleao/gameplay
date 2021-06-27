import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { styles } from './styles';
import { theme } from '@globals/styles/theme';

type Props = {
  children: ReactNode
}

export function Background({ children } : Props) {
  const { secondary80, secondary90 } = theme.colors;

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary80, secondary90]}
    >
      {children}
    </LinearGradient>
  )
}