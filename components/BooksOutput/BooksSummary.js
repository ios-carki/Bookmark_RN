import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { formatNumber } from "../../utils/format";

function BooksSummary({ period, booksCount, pagesCount }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentsView}>
        <Text style={styles.periodTextStyle}>{period}</Text>
        <Text style={styles.bookCounterTextStyle}>{booksCount}권 완독</Text>
      </View>
      <View style={styles.pageCounterView}>
        <Text style={styles.pageCountTextStyle}>
          {formatNumber(pagesCount)}
        </Text>
        <Text style={styles.countUnitTextStyle}>쪽</Text>
      </View>
    </View>
  );
}

export default BooksSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 16,
  },
  contentsView: {
    gap: 2,
  },
  periodTextStyle: {
    ...GlobalStyles.fonts.caption,
    color: GlobalStyles.colors.primary100,
  },
  bookCounterTextStyle: {
    ...GlobalStyles.fonts.headline,
    color: GlobalStyles.colors.white,
  },
  pageCounterView: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2
  },
  pageCountTextStyle: {
    ...GlobalStyles.fonts.number,
    color: GlobalStyles.colors.white,
  },
  countUnitTextStyle: {
    ...GlobalStyles.fonts.caption,
    color: GlobalStyles.colors.primary100,
  }
});
