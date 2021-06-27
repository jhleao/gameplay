import { theme } from '@globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  background: {
    backgroundColor: theme.colors.secondary80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 34,
    paddingHorizontal: 24,
    width: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  text: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 29,
  },
  yesButton: {
    backgroundColor: theme.colors.primary,
    width: '50%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 5,
  },
  noButton: {
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    width: '50%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 5,
  },
  buttonText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  game: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  play: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
  },
});