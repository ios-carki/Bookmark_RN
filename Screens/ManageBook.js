import { useContext, useLayoutEffect } from "react";
import { Alert, ScrollView, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/GlobalStyles";
import BookForm from "../components/ManageBook/BookForm";
import { BookContext } from "../store/book-context";
import IconButton from "../components/UI/IconButton";

function ManageBook({ route, navigation }) {
  const bookId = route.params?.bookId;
  const bookCtx = useContext(BookContext);
  const isEditing = !!bookId;
  const book = bookCtx.books.find((book) => book.id === bookId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "책 수정" : "책 추가",
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(bookData) {
    if (isEditing) {
      bookCtx.updateBook(bookId, bookData);
    } else {
      bookCtx.addBook(bookData);
    }

    navigation.goBack();
  }

  function deleteBookHandler() {
    bookCtx.deleteBook(bookId);

    navigation.popToTop();
  }

  function deleteButtonHandler() {
    Alert.alert(
      "책 삭제",
      `'${book.title}'책을 서재에서 삭제할까요?\n삭제하면 되돌릴 수 없어요.`,
      [
        { text: "취소", style: "cancel" },
        { text: "삭제", style: "destructive", onPress: deleteBookHandler },
      ],
    );
  }

  return (
    <ScrollView
      style={styles.scrollViewScreen}
      contentContainerStyle={styles.scrollViewContentsScreen}
    >
      <BookForm
        onCancel={cancelHandler}
        onSumbit={confirmHandler}
        defaultValue={book}
      />
      {isEditing && (
        <View style={styles.deleteButtonContainer}>
          <IconButton
            name={"trash-outline"}
            size={28}
            color={GlobalStyles.colors.error500}
            onPress={deleteButtonHandler}
          />
        </View>
      )}
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
  deleteButtonContainer: {
    paddingTop: 16,
    alignItems: 'center'
  },
});
