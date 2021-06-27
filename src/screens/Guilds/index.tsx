import { ListDivider } from '@components/ListDivider';
import { GuildProps } from '@ts/guild';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Guild } from '@components/Guild';
import { api } from '@services/api';
import { Load } from '@components/Load';
import { useEffect } from 'react';

type Props = {
  selectGuild: (g: GuildProps) => void;
}

export function Guilds({ selectGuild } : Props) {

  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = async () => {
    const response = await api.get('/users/@me/guilds');
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {fetchGuilds()} , []);

  return (
    <View style={styles.container}>
      {
        loading ? <Load /> :
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (<Guild data={item} onPress={() => selectGuild(item)}/>)}
          ItemSeparatorComponent={() => <ListDivider isCentered/>}
          ListHeaderComponent={ () => <ListDivider isCentered/> }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 50, paddingBottom: 69 }}
          style={styles.guilds}
        />
      }
    </View>
  )
}