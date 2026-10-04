import { View, Text, StyleSheet, Pressable } from "react-native";

import { GlobalStyles } from "../../constants/GlobalStyles";
import StarRating from "../UI/StarRating";
import { getFormattedDate } from "../../utils/date";
import { formatNumber } from "../../utils/format"

function BookItem({ title, author, pages, finishedDate, rating, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressable}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.spine} />
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.titleTextStyle} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.authorTextStyle} numberOfLines={1}>
              {author}
            </Text>
          </View>
          <View style={styles.infoMetaContainer}>
            <StarRating size={14} rating={rating} />
            <Text style={styles.dateTextStyle}>{getFormattedDate(finishedDate)}</Text>
          </View>
        </View>
        <View style={styles.pageContainer}>
          <Text style={styles.pageCountTextStyle}>{formatNumber(pages)}</Text>
          <Text style={styles.pageUnitTextStyle}>쪽</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default BookItem;

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.75,
  },
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 12,
    gap: 12,
    ...GlobalStyles.shadow.card,
  },
  spine: {
    width: 4,
    borderRadius: 2,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  infoContainer: {
    flex: 1,
    gap: 8,
  },
  infoTextContainer: {
    gap: 2,
  },
  titleTextStyle: {
    ...GlobalStyles.fonts.bookTitle,
    color: GlobalStyles.colors.ink900,
  },
  authorTextStyle: {
    ...GlobalStyles.fonts.sub,
    color: GlobalStyles.colors.gray700,
  },
  infoMetaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateTextStyle: {
    ...GlobalStyles.fonts.caption,
    color: GlobalStyles.colors.gray500,
  },
  pageContainer: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: "center",
    alignItems: "center",
    minWidth: 64,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
  },
  pageCountTextStyle: {
    ...GlobalStyles.fonts.badge,
    color: GlobalStyles.colors.primary700,
  },
  pageUnitTextStyle: {
    ...GlobalStyles.fonts.caption,
    color: GlobalStyles.colors.primary400,
  },
});
