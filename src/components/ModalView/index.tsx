import { styles } from './styles';
import React from 'react'
import { TouchableWithoutFeedback, View, Modal, ModalProps } from 'react-native';
import { ReactNode } from 'react';
import { Background } from '@components/Background';


type Props = ModalProps & {
  children: ReactNode,
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest } : Props) {

  return (
    <Modal
      transparent
      animationType='slide' 
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}