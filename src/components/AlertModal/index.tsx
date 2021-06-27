import { useAlertModal } from '@hooks/modals';
import React from 'react';

import {
  View,
  Text,
  Modal
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '@globals/styles/theme';

export function AlertModal(){
  const { alertModalMsg, toggleAlertModal } = useAlertModal();

  return (
    <View style={styles.overlay}>
      <Modal
        transparent
        animationType='slide' 
        statusBarTranslucent
      >
        <View style={styles.container}>
          <View style={styles.background}>
            <Text style={styles.text}>{ alertModalMsg }</Text>
            <RectButton 
              onPress={() => toggleAlertModal()} 
              style={styles.button}
            >
              <Text style={styles.buttonText}>OK</Text>
            </RectButton>
          </View>
        </View>
      </Modal>
    </View>
  );
}