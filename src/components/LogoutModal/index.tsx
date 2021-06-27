import { useAuth } from '@hooks/auth';
import { useAlertModal, useLogoutModal } from '@hooks/modals';
import React from 'react';

import {
  View,
  Text,
  Modal
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function LogoutModal(){
  const { toggleLogoutModal } = useLogoutModal();
  const { signOut } = useAuth();

  const handleLogout = () => {
    toggleLogoutModal();
    signOut();
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
              Deseja sair do
              <Text style={styles.game}>{` Game`}</Text>
              <Text style={styles.play}>Play</Text>
              <Text style={styles.game}>?</Text>
            </Text>
            <View style={styles.buttons}>
              <RectButton 
                onPress={() => toggleLogoutModal()} 
                style={styles.noButton}
              >
                <Text style={styles.buttonText}>Não</Text>
              </RectButton>
              <RectButton 
                onPress={() => handleLogout()} 
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