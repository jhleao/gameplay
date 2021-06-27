import { styles } from './styles';
import React from 'react'
import { View, Text } from 'react-native';
import { Avatar } from '@components/Avatar';
import { AppointmentMember } from '@ts/appointmentMember';
import { theme } from '@globals/styles/theme';

type Props = {
  data: AppointmentMember;
}

export function Member({ data } : Props) {
  const isOnline = data.status === 'online';
  const { primary, on } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatar_url}/>

      <View>
        <Text style={styles.title}>
          { data.username }
        </Text>

        <View style={styles.status}>
          <View style={[styles.statusBullet, { backgroundColor: isOnline ? on : primary}]}/>
          <Text style={styles.statusText}>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </Text>
        </View>

      </View>
    </View>
  )
}