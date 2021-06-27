import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '@components/Header';
import { Background } from '@components/Background';
import { styles } from './styles';
import { CategorySelect } from '@components/CategorySelect';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '@globals/styles/theme';
import { GuildIcon } from '@components/GuildIcon';
import { SamllInput } from '@components/SmallInput';
import { TextArea } from '@components/TextArea';
import { Button } from '@components/Button';
import { Guilds } from '@screens/Guilds';
import { ModalView } from '@components/ModalView'
import { GuildProps } from '@ts/guild';
import uuid from 'react-native-uuid';
import { COLLECTION_APPOINTMENTS } from '@configs/storage';
import { useNavigation } from '@react-navigation/core';
import { useAlertModal, useConfirmationModal } from '@hooks/modals';

export function AppointmentCreate() {
  const { toggleAlertModal } = useAlertModal();
  const { toggleConfirmationModal } = useConfirmationModal();
  const navigation = useNavigation();

  const [guildModalVisible, setGuildModalVisible] = useState(false);

  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = () => setGuildModalVisible(true);
  const handleCloseGuilds = () => setGuildModalVisible(false);

  const handleGuildSelect = (guild: GuildProps) => {
    setGuild(guild);
    setGuildModalVisible(false);
  }

  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const handleCategorySelect = (categoryId: string) => setSelectedCategoryId(categoryId)

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if(!inputsAreValid()) return;
    toggleConfirmationModal('Deseja criar esta partida?', save);
  }

  const save = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category: selectedCategoryId,
      date: `${day}/${month} às ${hour}:${minute}`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  const inputsAreValid = () => {
    const categoryValid = !!selectedCategoryId;

    if(!categoryValid){
      toggleAlertModal('Selecione uma categoria.');
      return false;
    }

    const guildValid = !!guild.id;

    if(!guildValid){
      toggleAlertModal('Selecione um servidor.');
      return false;
    }

    const dateValid = 
      day.length === 2 && month.length === 2 &&
      parseInt(day) > 0 && parseInt(day) <= 31 &&
      parseInt(month) > 0 && parseInt(month) <= 12;

    if(!dateValid) {
      toggleAlertModal('Insira uma data válida.');
      return false;
    }

    const timeValid = 
      hour.length === 2 && minute.length === 2 && 
      parseInt(hour) < 24 && parseInt(hour) >= 0 &&
      parseInt(minute) < 60 && parseInt(minute) >= 0;
    
    if(!timeValid) {
      toggleAlertModal('Insira um horário válido.');
      return false;
    }

    return true;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title='Agendar partida' />
          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
            Categoria
          </Text>
          <CategorySelect 
            hasCheckbox 
            categorySelected={selectedCategoryId} 
            setCategory={handleCategorySelect}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                { guild?.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : 
                  <View style={styles.imagePlaceholder} /> }
                <View style={styles.selectBody}>
                  <Text style={styles.label}> 
                    { guild?.name ? guild.name : 'Selecione um servidor' }
                  </Text>
                </View>
                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SamllInput maxLength={2} value={day} onChangeText={setDay}/>
                  <Text style={styles.divider}>/</Text>
                  <SamllInput maxLength={2} value={month} onChangeText={setMonth}/>
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SamllInput maxLength={2} value={hour} onChangeText={setHour}/>
                  <SamllInput maxLength={2} value={minute} onChangeText={setMinute}/>
                </View>
              </View> 
            </View>
            <View>
              <View style={[styles.column, { marginBottom: 12 }]}>
                <Text style={styles.label}>
                  Descrição
                </Text>
                <Text style={styles.charactersLimit}>
                  Max. 100 caracteres
                </Text>
              </View>
              
              <TextArea 
                multiline 
                maxLength={100} 
                numberOfLines={5} 
                autoCorrect={false} 
                value={description}
                onChangeText={setDescription}
              />
              
            </View>
          </View>
        <View style={styles.footer} >
          <Button text='Agendar' onPress={handleSave}/>
        </View>
        </Background>
      </ScrollView>

      <ModalView visible={guildModalVisible} closeModal={handleCloseGuilds}>
        <Guilds selectGuild={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}