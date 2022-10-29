import "./App.css";
import React, { useState } from "react";
import bible from "./bible";
import BookList from "./BookList";
import ChapterList from "./ChapterList";
import VerseList from "./VerseList";

function App() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [result, setResult] = useState([]);

  const handleBook = (e) => setBook(e.target.value);
  const handleChapter = (e) => setChapter(e.target.value);
  const handleVerse = (e) => setVerse(e.target.value);

  const handleFind = (e) => {
    e.preventDefault();

    const verses = verse.split("-");
    let finalVerses = [],
      counter = Number(verses[0]);
    let lastCounter = verses.length > 1 ? Number(verses[1]) : counter;
    const filterBook = book.toLowerCase();
    for (let i = counter; i <= lastCounter; i++) {
      if (bible[filterBook][chapter]) {
        finalVerses.push({
          id: counter,
          verse: bible[filterBook][chapter][counter]
            ? bible[filterBook][chapter][counter]
            : "no existe este versiculo!",
        });
        counter++;
      }
    }
    setResult(finalVerses);
  };

  const handleReset = (e) => {
    e.target.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleFind}>
        <BookList handleBook={handleBook} handleReset={handleReset} />
        <ChapterList
          handleChapter={handleChapter}
          book={book}
          handleReset={handleReset}
        />
        <VerseList
          handleVerse={handleVerse}
          book={book}
          chapter={chapter}
          handleReset={handleReset}
        />
        <input type="submit" value="Submit" />
      </form>
      <h2 className="header">
        {result.length ? `${book} ${chapter}: ${verse}` : ""}
      </h2>
      {result.length ? (
        result.map((r) => {
          return <p className="verses" key={r.id}>{`${r.id}.- ${r.verse}`}</p>;
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
