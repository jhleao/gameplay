import { theme } from "@globals/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 14,
  },
  check: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 13,
    height: 13,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 3,
  },
  checked: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 13,
    height: 13,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  }
});