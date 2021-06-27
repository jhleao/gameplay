import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { GuildProps } from '@ts/guild';
import { GuildIcon } from '@components/GuildIcon';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';

type Props =  TouchableOpacityProps & {
  data: GuildProps; 
}

export function Guild({ data, ...rest } : Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7} 
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon}/>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
      <Feather 
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}