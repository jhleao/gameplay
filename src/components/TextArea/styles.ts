import { theme } from "@globals/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    marginRight: 4,
    textAlign: 'left',
    paddingTop: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50
  }
});