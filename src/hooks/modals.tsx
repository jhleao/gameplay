import React from 'react'
import { ReactNode, useState } from 'react';
import { createContext, useContext } from 'react';

type ModalContextProps = {
  alert: {
    alertModalMsg: string;
    alertModalIsOpen: boolean;
    toggleAlertModal: (msg?: string) => void;
  },
  confirmation: {
    confirmationModalIsOpen: boolean,
    confirmationModalData: ConfirmationModalData,
    toggleConfirmationModal: (msg?: string, cb?: () => void) => void,
  },
  logout: {
    logoutModalIsOpen: boolean;
    toggleLogoutModal: () => void;
  }
}

const ModalContext = createContext({} as ModalContextProps);

export const useAlertModal = () => useContext(ModalContext).alert;
export const useLogoutModal = () => useContext(ModalContext).logout;
export const useConfirmationModal = () => useContext(ModalContext).confirmation;

type ModalProviderProps = {
  children: ReactNode
}

type ConfirmationModalData = {
  msg: string,
  cb: () => void;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);
  const [alertModalMsg, setAlertModalMsg] = useState('');

  const toggleAlertModal = (msg?: string) => {
    if(msg) setAlertModalMsg(msg);
    else setAlertModalMsg('');
    setAlertModalIsOpen(!alertModalIsOpen)
  };

  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const toggleLogoutModal = () => setLogoutModalIsOpen(!logoutModalIsOpen);
  
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [confirmationModalData, setConfirmationModalData] = useState({} as ConfirmationModalData);

  const toggleConfirmationModal = (msg?: string, cb?: () => void) => {
    if(msg && cb) setConfirmationModalData({msg, cb});
    else setConfirmationModalData({} as ConfirmationModalData);
    setConfirmationModalIsOpen(!confirmationModalIsOpen)
  };

  const data = {
    alert: {
      alertModalMsg,
      alertModalIsOpen,
      toggleAlertModal
    },
    confirmation: {
      confirmationModalIsOpen,
      confirmationModalData,
      toggleConfirmationModal,
    },
    logout:{
      logoutModalIsOpen,
      toggleLogoutModal
    }
  }

  return (
    <ModalContext.Provider value={data}>
      { children }
    </ModalContext.Provider>
  )
}