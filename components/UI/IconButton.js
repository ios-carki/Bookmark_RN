import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";

function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name={name} size={size} color={color} />
        </View>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  iconContainer: {
    padding: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
