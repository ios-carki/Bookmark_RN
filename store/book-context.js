import { createContext, useReducer } from "react";

import { DUMMY_BOOKS } from "../data/dummy-data";

const DUMMY = DUMMY_BOOKS;

export const BookContext = createContext({
  books: [],
  addBook: ({ title, author, page, finishedDate, rating, memo }) => {},
  deleteBook: (id) => {},
  updateBook: (id, { title, author, page, finishedDate, rating, memo }) => {},
});

function bookReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();

      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableBookIndex = state.findIndex(
        (book) => book.id === action.payload.id,
      );
      const updateBook = state[updateableBookIndex];
      const updatedItem = { ...updateBook, ...action.payload.data };
      const updateBooks = [...state];

      updateBooks[updateableBookIndex] = updatedItem;

      return updateBooks;
    case "DELETE":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

function BooksContextProvider({ children }) {
  const [bookState, dispatch] = useReducer(bookReducer, DUMMY);

  function addBook(bookData) {
    dispatch({ type: "ADD", payload: bookData });
  }

  function deleteBook(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateBook(id, bookData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: bookData } });
  }

  const value = {
    books: bookState,
    addBook: addBook,
    deleteBook: deleteBook,
    updateBook: updateBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default BooksContextProvider;
