import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/auth';
import { SignIn } from '@screens/SignIn';
import { useAlertModal, useConfirmationModal, useLogoutModal } from '@hooks/modals';
import { AlertModal } from '@components/AlertModal';
import { LogoutModal } from '@components/LogoutModal';
import { ConfirmationModal } from '@components/ConfirmationModal';

export function Routes() {
  const { user } = useAuth();
  const { alertModalIsOpen } = useAlertModal();
  const { logoutModalIsOpen } = useLogoutModal();
  const { confirmationModalIsOpen } = useConfirmationModal();

  return(
    <NavigationContainer>
      { user.id ? <AppRoutes /> : <SignIn /> }
      { alertModalIsOpen && <AlertModal /> }
      { confirmationModalIsOpen && <ConfirmationModal /> }
      { logoutModalIsOpen && <LogoutModal /> }
    </NavigationContainer>
  )
}