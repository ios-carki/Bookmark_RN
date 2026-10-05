import { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/GlobalStyles";
import BookForm from "../components/ManageBook/BookForm";
import { BookContext } from "../store/book-context";

function ManageBook({ route, navigation }) {
  const bookCtx = useContext(BookContext);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(bookData) {
    bookCtx.addBook(bookData);

    navigation.goBack();
  }

  return (
    <ScrollView
      style={styles.scrollViewScreen}
      contentContainerStyle={styles.scrollViewContentsScreen}
    >
      <BookForm onCancel={cancelHandler} onSumbit={confirmHandler} />
    </ScrollView>
  );
}

export default ManageBook;

const styles = StyleSheet.create({
  scrollViewScreen: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.paper50,
  },
  scrollViewContentsScreen: {
    flexGrow: 1,
    padding: 24,
    gap: 16,
  },
});
