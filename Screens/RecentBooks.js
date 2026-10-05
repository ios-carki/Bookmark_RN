import { View, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";

import BooksSummary from "../components/BooksOutput/BooksSummary";
import BookItem from "../components/BooksOutput/BookItem";
import { GlobalStyles } from "../constants/GlobalStyles";
import { BookContext } from "../store/book-context";
import { getDateMinusDays } from "../utils/date";

function RecentBooks({ navigation }) {
  const bookCtx = useContext(BookContext);
  const recentBooks = bookCtx.books.filter((book) => {
    const today = new Date();
    const date30DaysAgo = getDateMinusDays(today, 30);

    return book.finishedDate > date30DaysAgo && book.finishedDate <= today;
  });

  const booksCount = recentBooks.length;
  const pageCount = recentBooks.reduce((sum, book) => {
    return sum + book.page;
  }, 0);

  function renderBookItems(bookData) {
    const data = bookData.item;

    function itemPressHandler() {
      navigation.navigate("BookDetail", {
        bookId: data.id,
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
        data={recentBooks}
        renderItem={renderBookItems}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
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
