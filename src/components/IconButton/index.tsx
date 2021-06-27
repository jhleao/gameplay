import { View, Text } from 'react-native';
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

type Props = RectButtonProps & {
  Icon: React.FC<SvgProps>;
  text: string; 
}

export function IconButton({ Icon, text, ...rest } : Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Icon width={28} height={18}/>
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </RectButton>
  )
}