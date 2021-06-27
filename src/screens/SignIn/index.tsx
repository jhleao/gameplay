import React from 'react';
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native';

import { IconButton } from '@components/IconButton';
import { Background } from '@components/Background';

import { styles } from './styles';
import IllustrationImg from '@assets/illustration.png';
import DiscordSvg from '@assets/discord.svg';
import { useAuth } from '@hooks/auth';
import { theme } from '@globals/styles/theme';

export function SignIn() {
  const { signIn, loading } = useAuth();

  const handleSignIn = async () => {
    try{
      await signIn();
    } catch (e) {
      Alert.alert(e);
    }
  }

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          {
            loading ? <ActivityIndicator color={theme.colors.primary}/> :
            <IconButton 
              Icon={DiscordSvg} 
              text='Entrar com Discord'
              activeOpacity={0.3}  
              onPress={handleSignIn}
            />
          }
          
        </View>
      </View>
    </Background>
  )
}