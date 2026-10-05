import { View, FlatList, StyleSheet } from "react-native";

import BooksSummary from "../components/BooksOutput/BooksSummary";
import { DUMMY_BOOKS } from "../data/dummy-data";
import BookItem from "../components/BooksOutput/BookItem";
import { GlobalStyles } from "../constants/GlobalStyles";

function RecentBooks({ navigation }) {
  const booksCount = DUMMY_BOOKS.length;
  const pageCount = DUMMY_BOOKS.reduce((sum, book) => {
    return sum + book.page;
  }, 0);

  function renderBookItems(bookData) {
    const data = bookData.item;

    function itemPressHandler() {
      navigation.navigate("BookDetail", {
        book: data,
      });
    }

    return (
      <BookItem
        title={data.title}
        author={data.author}
        pages={data.page}
        finishedDate={data.finishedDate}
        rating={data.rating}
        onPress={itemPressHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <BooksSummary
        period="최근 30일"
        booksCount={booksCount}
        pagesCount={pageCount}
      />
      <FlatList
        data={DUMMY_BOOKS}
        renderItem={renderBookItems}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default RecentBooks;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.paper50,
  },
  listContainer: {
    paddingVertical: 16,
    gap: 12,
  },
});
