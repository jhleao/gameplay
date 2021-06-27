import React, { useState } from 'react';
import { ImageBackground, Text, View, FlatList, Platform, Share } from 'react-native';
import { Header } from '@components/Header';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '@components/Background';
import BannerImg from '@assets/banner.png';
import { styles } from './styles';
import { ListHeader } from '@components/ListHeader';
import { AppointmentMember } from '@ts/appointmentMember';
import { ListDivider } from '@components/ListDivider';
import { Member } from '@components/Member';
import { IconButton } from '@components/IconButton';
import DiscordSvg from '@assets/discord.svg';
import { AppointmentProps } from '@ts/appointment';
import { useNavigation, useRoute } from '@react-navigation/native';
import { categories } from '../../utils/categories';
import { useEffect } from 'react';
import { api } from '@services/api';
import { Load } from '@components/Load';
import { DataPlaceholder } from '@components/DataPlaceholder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import { COLLECTION_APPOINTMENTS } from '@configs/storage';
import { useConfirmationModal } from '@hooks/modals';

type Params = {
  appointment: AppointmentProps;
}

type Widget = {
  id: string;
  name: string;
  instant_invite: string;
  members: AppointmentMember[];
  presence_count: number;
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<Widget>({} as Widget);
  const [loading, setLoading] = useState(true);
  const [widgetDisabled, setWidgetDisabled] = useState(false);

  const navigation = useNavigation();
  
  const { toggleConfirmationModal } = useConfirmationModal();

  const { appointment } = useRoute().params as Params;
  const categoryName = categories.find(c => c.id === appointment.category)?.title;

  const fetchWidget = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/guilds/${appointment.guild.id}/widget.json`);
      setWidget(response.data);
    } catch (e) {
      setWidgetDisabled(true);
    } finally {
      setLoading(false);
    }
  }

  const handleShareInvitation = () => {
    const message = Platform.OS === 'ios' ?
      `Junte-se a ${appointment.guild.name}` :
      widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    })
  }

  const handleOpenGuild = () => {
    Linking.openURL(widget.instant_invite);
  };

  const handleDeleteAppointment = async () => {
    const storageResponse = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const appointments: AppointmentProps[] = 
      storageResponse ? JSON.parse(storageResponse) : [];
    
    const newAppointments = appointments.filter(a => a.id !== appointment.id);

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify(newAppointments));

    navigation.goBack();
  }

  useEffect(() => {
    fetchWidget();
  }, []);

  return (
    <Background>
      <Header 
        title='Detalhes' 
        action={
          <>
            <BorderlessButton onPress={() => toggleConfirmationModal('Deseja excluir essa partida?', handleDeleteAppointment)}>
              <Fontisto 
                name='trash'
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
            {appointment.guild.owner ?
              <BorderlessButton onPress={handleShareInvitation}>
                <Fontisto 
                  name='share'
                  size={24}
                  color={theme.colors.primary}
                />
              </BorderlessButton>
            : null}
          </>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> { appointment.guild.name }</Text>
          <Text style={styles.appointment}>{ categoryName } | { appointment.date }</Text>
          {!!appointment.description && <Text style={styles.subtitle}> { appointment.description } </Text>}
        </View>
      </ImageBackground>
      {
        loading ? <Load /> :
        <>
          <ListHeader title='Jogadores' subtitle={widgetDisabled ? '' : `Total ${widget.members.length}`}/>
          { widgetDisabled ? 
            <DataPlaceholder 
              title='Não temos acesso a este dado...' 
              subtitle='Verifique se a Widget deste servidor está configurada.'
            /> :
            <FlatList 
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<Member data={item}/>)}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              style={styles.members}
              contentContainerStyle={{ paddingBottom: 69 }}
            />
          }
        </>  
      }

      {appointment.guild.owner ? 
        <View style={styles.footer}>
        <IconButton 
          Icon={DiscordSvg} 
          text='Entrar na partida' 
          onPress={handleOpenGuild}
        />
      </View>
      : null}
    </Background>
  )
}
