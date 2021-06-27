import React, { useCallback, useState } from 'react'
import { View } from 'react-native';

import { Profile } from '@components/Profile';
import { AddButton } from '@components/AddButton';

import { styles } from './styles';
import { CategorySelect } from '@components/CategorySelect';
import { ListHeader } from '@components/ListHeader';
import { FlatList } from 'react-native-gesture-handler';
import { AppointmentProps } from '@ts/appointment';
import { Appointment } from '@components/Appointment';
import { ListDivider } from '@components/ListDivider';
import { Background } from '@components/Background';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '@configs/storage';
import { Load } from '@components/Load';
import { categories } from '../../utils/categories';
import { DataPlaceholder } from '@components/DataPlaceholder';

export function Home(){  
  const [ selectedCategoryId, setSelectedCategoryId ] = useState('');
  const selectedCategoryName = categories.find(c => c.id === selectedCategoryId)?.title
  const navigation = useNavigation();

  const handleCategorySelect = (categoryId: string) => 
    categoryId === selectedCategoryId ? 
      setSelectedCategoryId('') 
      : setSelectedCategoryId(categoryId)

  const handleAppointmentDetails = (appointment: AppointmentProps) =>
    navigation.navigate('AppointmentDetails', { appointment });

  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate');

  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    setLoading(true);

    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(selectedCategoryId){
      setAppointments(storage.filter(a => a.category === selectedCategoryId))
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  } 

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [selectedCategoryId]));
    
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <AddButton onPress={handleAppointmentCreate}/>
        </View>
          <CategorySelect categorySelected={selectedCategoryId} setCategory={handleCategorySelect}/>
          <ListHeader 
            title={selectedCategoryId ? `Partidas agendadas [${selectedCategoryName}]` : 'Partidas agendadas' }
            subtitle={loading ? '' : `Total ${appointments.length}`}/>
          {
            loading ? <Load /> :
            appointments.length < 1 ? 
              <DataPlaceholder
               title='Sem partidas agendadas...' 
               subtitle='Experimente agendar partidas clicando no "+"'
              /> :
              <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.matches}
                ItemSeparatorComponent={ListDivider}
                contentContainerStyle={{ paddingBottom: 69 }}
                renderItem={({ item }) => (
                  <Appointment 
                    data={item}
                    onPress={() => handleAppointmentDetails(item)}  
                  />
                )}
              />
          }
      </View>
    </Background>
  )
}