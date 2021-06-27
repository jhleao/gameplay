import { AuthSessionResult } from 'expo-auth-session';

export type DiscordAuthResponse = AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}