import React from "react";
import bible from "./bible";

function ChapterList({ handleChapter, book, handleReset }) {
  let chapterList = [];

  if (book) {
    const filterBook = book.toLowerCase();
    const chapterQuantity = Object.keys(bible[filterBook]).length;
    const arrOfChapters = [...Array(chapterQuantity).keys()];
    chapterList = arrOfChapters.map((chapter, i) => {
      return { id: i, chapter: (chapter + 1).toString() };
    });
  }

  return (
    <>
      <label htmlFor="chapters">Choose a chapter: </label>
      <input
        list="listOfchapters"
        id="chapters"
        name="chapters"
        onChange={handleChapter}
        onClick={handleReset}
      />
      <datalist id="listOfchapters">
        {chapterList.map((chapter) => {
          return <option key={chapter.id} value={chapter.chapter} />;
        })}
      </datalist>
    </>
  );
}

export default ChapterList;
