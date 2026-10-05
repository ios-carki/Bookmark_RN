import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";

function StarRating({ size, rating, onPress, isInvalid, style }) {
  return (
    <View style={[styles.row, onPress && styles.inputRow, style]}>
      {[1, 2, 3, 4, 5].map((value) => {
        const isFilled = value <= rating;
        const color = isFilled
          ? GlobalStyles.colors.accent500
          : isInvalid
            ? GlobalStyles.colors.error500
            : GlobalStyles.colors.gray300;
        const star = (
          <Ionicons
            name={isFilled ? "star" : "star-outline"}
            size={size}
            color={color}
          />
        );

        if (!onPress) {
          return <View key={value}>{star}</View>;
        }

        return (
          <Pressable
            key={value}
            style={styles.pressableStar}
            onPress={() => onPress(value)}
          >
            {star}
          </Pressable>
        );
      })}
    </View>
  );
}

export default StarRating;

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 2 },
  inputRow: { gap: 0, marginLeft: -4, alignSelf: "flex-start" },
  pressableStar: { padding: 4 },
});
