import { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { BookContext } from "../store/book-context";
import { GlobalStyles } from "../constants/GlobalStyles";
import BooksSummary from "../components/BooksOutput/BooksSummary";
import BookItem from "../components/BooksOutput/BookItem";

// TODO: RectenBooks 중복 코드 제거
function AllBooks({ navigation }) {
  const bookCtx = useContext(BookContext);
  const allBooks = bookCtx.books;

  const booksCount = allBooks.length;
  const pageCount = allBooks.reduce((sum, book) => {
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
        period="전체"
        booksCount={booksCount}
        pagesCount={pageCount}
      />
      <FlatList
        data={allBooks}
        renderItem={renderBookItems}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default AllBooks;

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
