import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";

function InfoTile({ icon, label, value, style }) {
  return (
    <View style={[styles.contentsContainer, style]}>
      <Ionicons name={icon} size={18} color={GlobalStyles.colors.primary500} />
      <View style={styles.infoContainer}>
        <Text style={styles.labelTextStyle} numberOfLines={1}>
          {label}
        </Text>
        <Text style={styles.valueTextStyle} numberOfLines={1}>
          {value}
        </Text>
      </View>
    </View>
  );
}

export default InfoTile;

const styles = StyleSheet.create({
  contentsContainer: {
    flex: 1,
    gap: 8,
    padding: 16,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 12,
    ...GlobalStyles.shadow.card,
  },
  infoContainer: {
    gap: 2,
  },
  labelTextStyle: {
    ...GlobalStyles.fonts.caption,
    color: GlobalStyles.colors.gray500,
  },
  valueTextStyle: {
    ...GlobalStyles.fonts.value,
    color: GlobalStyles.colors.ink900,
  },
});
