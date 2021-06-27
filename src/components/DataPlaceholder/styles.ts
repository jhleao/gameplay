import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  icon: {
    marginVertical: 8,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.highlight,
    textAlign: 'center',
    marginBottom: 4
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.highlight,
    textAlign: 'center',
  }
});