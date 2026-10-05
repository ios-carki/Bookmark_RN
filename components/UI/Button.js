import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Button({ title, onPress, mode = "primary", titleTextStyle, style }) {
  const isFlat = mode === "flat"

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isFlat && styles.flatModeContainer , style]}>
        <Text style={[styles.titleTextStyle, isFlat && styles.flatModeTitleTextStyle , titleTextStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flatModeContainer: {
    backgroundColor: 'transparent'
  },
  titleTextStyle: {
    ...GlobalStyles.fonts.button,
    color: GlobalStyles.colors.white,
    textAlign: "center",
  },
  flatModeTitleTextStyle: {
    color: GlobalStyles.colors.primary500
  }
});
