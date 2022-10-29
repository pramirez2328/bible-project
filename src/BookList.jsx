import React from "react";
import bibleListArray from "./util/bibleListArray";

function BookList({ handleBook, handleReset }) {
  const bookList = bibleListArray.map((book, i) => {
    return { id: i, book };
  });
  return (
    <>
      <label htmlFor="book">Choose a book: </label>
      <input
        list="Bible books"
        id="book"
        name="Bible books"
        onChange={handleBook}
        onClick={handleReset}
      />
      <datalist id="Bible books">
        {bookList.map((book) => {
          return <option key={book.id} value={book.book} />;
        })}
      </datalist>
    </>
  );
}

export default BookList;
