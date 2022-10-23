import React from "react";
import bible from "./bible";

function VerseList({ handleVerse, book, chapter }) {
  let verseList = [];
  if (chapter) {
    const filterBook = book.toLowerCase();
    const verseQuantity = Object.keys(bible[filterBook][chapter]).length;
    const arrOfVerses = [...Array(verseQuantity).keys()];
    verseList = arrOfVerses.map((verse, i) => {
      return { id: i, verse: (verse + 1).toString() };
    });
  }

  return (
    <>
      <label htmlFor="verses">Choose a verse: </label>
      <input
        list="listOfVerses"
        id="verses"
        name="verses"
        onChange={handleVerse}
      />
      <datalist id="listOfVerses">
        {verseList.map((verse) => {
          return <option key={verse.id} value={verse.verse} />;
        })}
      </datalist>
    </>
  );
}

export default VerseList;
