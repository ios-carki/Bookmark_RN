import { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { GlobalStyles } from "../constants/GlobalStyles";
import StarRating from "../components/UI/StarRating";
import InfoTile from "../components/BookDetail/InfoTile";
import { getFormattedDate } from "../utils/date";
import { formatNumber } from "../utils/format";
import { BookContext } from "../store/book-context";

function BookDetail({ route, navigation }) {
  const bookId = route.params.bookId;
  const bookCtx = useContext(BookContext)
  const book = bookCtx.books.find(book => book.id === bookId)

  return (
    <ScrollView style={styles.scrollViewScreen} contentContainerStyle={styles.scrollViewContentsScreen}>
      <View style={styles.heroCardView}>
        <View style={styles.coverView}>
          <Ionicons
            name="book"
            size={40}
            color={GlobalStyles.colors.primary200}
          />
        </View>
        <View style={styles.metaContainer}>
          <Text style={styles.titleTextStyle}>{book.title}</Text>
          <Text style={styles.authorTextStyle}>{book.author}</Text>
        </View>
        <StarRating size={20} rating={book.rating} style={{ marginTop: -4 }} />
      </View>
      <View style={styles.infoTileContainer}>
        <InfoTile
          icon={"calendar-outline"}
          label="완독일"
          value={getFormattedDate(book.finishedDate)}
        />
        <InfoTile
          icon={"document-text-outline"}
          label="페이지"
          value={formatNumber(book.page)}
        />
      </View>
      <View style={styles.memoContainer}>
        <Text style={styles.memoTitleTextStyle}>한 줄 메모</Text>
        <View style={styles.memoBoxView}>
          <Text style={styles.memoTextStyle}>
            {book.memo.trim().length === 0 ? "작성한 메모가 없어요" : book.memo}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default BookDetail;

const styles = StyleSheet.create({
  scrollViewScreen: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.paper50,
  },
  scrollViewContentsScreen: {
    padding: 16,
    gap: 12,
    flexGrow: 1
  },
  heroCardView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 16,
  },
  coverView: {
    backgroundColor: GlobalStyles.colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    height: 136,
  },
  metaContainer: {
    gap: 4,
    alignItems: "center",
  },
  titleTextStyle: {
    ...GlobalStyles.fonts.display,
    color: GlobalStyles.colors.ink900,
    textAlign: "center",
  },
  authorTextStyle: {
    ...GlobalStyles.fonts.bodyLong,
    color: GlobalStyles.colors.gray700,
  },
  infoTileContainer: {
    flexDirection: "row",
    gap: 12,
  },
  memoContainer: {
    gap: 8,
  },
  memoTitleTextStyle: {
    ...GlobalStyles.fonts.label,
    color: GlobalStyles.colors.gray700,
  },
  memoBoxView: {
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: GlobalStyles.colors.accent500,
    borderRadius: 12,
  },
  memoTextStyle: {
    ...GlobalStyles.fonts.bodyLong,
    color: GlobalStyles.colors.ink900,
  },
});
