import React from "react";
import bible from "./bible";

function VerseList({
  handleVerse,
  bookTitle,
  chapterTitle,
  verseTitle,
  handleReset,
}) {
  let verseList = [];
  const filterBook = bookTitle.toLowerCase();
  if (chapterTitle && bible[filterBook][chapterTitle]) {
    let verses = Object.keys(bible[filterBook][chapterTitle]) || [];
    const verseQuantity = verses && verses.length;
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
        onClick={handleReset}
        value={verseTitle}
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
