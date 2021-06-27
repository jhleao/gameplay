import { theme } from "@globals/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 62,
    height: 66,
    borderRadius: 8,
  },
  container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor:theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }
});