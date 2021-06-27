import { CDN_IMAGE } from '@configs/discordAuth';
import React from 'react';
import { Image, View } from 'react-native';
import DiscordSvg from '@assets/discord.svg'

import { styles } from './styles';

type Props = {
  guildId: string;
  iconId: string;
}

export function GuildIcon({ guildId, iconId } : Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    iconId ? 
      <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
      />
    :
      <View style={styles.container}>
        <DiscordSvg width={40} height={40}/>
      </View>
  )
}