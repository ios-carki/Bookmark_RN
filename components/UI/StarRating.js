import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";

function StarRating({ size, rating, onPress, isInvalid }) {
  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((value) => {
          const isFilled = value <= rating;
          const color = isFilled
            ? GlobalStyles.colors.accent500
            : isInvalid
              ? GlobalStyles.colors.error500
              : GlobalStyles.colors.gray300;

          return (
            <Pressable key={value} onPress={() => onPress(value)}>
              <Ionicons
                name={isFilled ? "star" : "star-outline"}
                size={size}
                color={color}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default StarRating;

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  starContainer: {
    gap: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
