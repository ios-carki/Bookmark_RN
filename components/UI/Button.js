import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Button({ title, onPress, titleTextStyle }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
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
  titleTextStyle: {
    ...GlobalStyles.fonts.button,
    color: GlobalStyles.colors.white,
    textAlign: "center",
  },
});
