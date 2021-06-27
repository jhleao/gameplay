import { theme } from '@globals/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text  } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  Icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckbox?: boolean;
}

export function Category({
  title,
  Icon,
  checked = false,
  hasCheckbox = false,
  ...rest
} : Props) {
  const { secondary50, secondary40, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasCheckbox && <View style={checked ? styles.checked :styles.check}/> }
          <Icon width={48} height={48} />
          <Text style={styles.title}>{ title }</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}