import { useConfirmationModal } from '@hooks/modals';
import React from 'react';

import {
  View,
  Text,
  Modal
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function ConfirmationModal(){
  const { toggleConfirmationModal, confirmationModalData } = useConfirmationModal();
  const { msg, cb } = confirmationModalData;

  const handleYes = () => {
    cb();
    toggleConfirmationModal();
  }

  return (
    <View style={styles.overlay}>
      <Modal
        transparent
        animationType='slide' 
        statusBarTranslucent
      >
        <View style={styles.container}>
          <View style={styles.background}>
            <Text style={styles.text}>
              { msg }
            </Text>
            <View style={styles.buttons}>
              <RectButton 
                onPress={() => toggleConfirmationModal()} 
                style={styles.noButton}
              >
                <Text style={styles.buttonText}>Não</Text>
              </RectButton>
              <RectButton 
                onPress={() => handleYes()} 
                style={styles.yesButton}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}