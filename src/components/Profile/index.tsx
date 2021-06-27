import { styles } from './styles';
import React from 'react'
import { View, Text } from 'react-native';

import { Avatar } from '@components/Avatar';
import { useAuth } from '@hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { useLogoutModal } from '@hooks/modals';

export function Profile() {
  const { user } = useAuth();
  const { toggleLogoutModal } = useLogoutModal();

  const handleSignOut = () => toggleLogoutModal();

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar imageUrl={user.avatar}/>
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}