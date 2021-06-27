import { theme } from "@globals/styles/theme";
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 150,
  },
  bannerContent: {
    flex: 1,
    padding: 24,
    marginTop: 30,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginLeft: -7
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21,
    marginLeft: -4
  },
  appointment: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  members: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
});