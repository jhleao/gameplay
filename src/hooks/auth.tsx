import { User } from '@ts/user';
import React, { useState } from 'react';
import { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '@services/api';
import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
  COLLECTION_USERS,
} from '@configs/.';
import { DiscordAuthResponse } from '@ts/discordAuthResponse';
import { useEffect } from 'react';

type AuthContextPs = {
  user: User,
  signIn: () => Promise<void>,
  signOut: () => Promise<void>,
  loading: boolean
}

const AuthContext = createContext({} as AuthContextPs)

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      setLoading(true);

      const authUrl = 
        `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession
        .startAsync({ authUrl }) as DiscordAuthResponse

      if(type !== 'success' || params.error) throw new Error()

      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

      const userInfo = await api.get('/users/@me');
      const firstName = userInfo.data.username.split(' ')[0];
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

      const userData = {
        ...userInfo.data,
        firstName,
        token: params.access_token
      }

      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

      setUser(userData);

    } catch(e) {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  const signOut = async () => {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  const loadUserStorageData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if(storage){
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged);
    }
  }

  useEffect(() => {loadUserStorageData()}, []);

  const value = {
    user,
    signIn,
    signOut,
    loading
  }

  return(
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}