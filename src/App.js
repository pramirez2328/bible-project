import "./App.css";
import React, { useState } from "react";
import bible from "./bible/bible";

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

    for (let i = counter; i <= lastCounter; i++) {
      if (bible[book][chapter]) {
        finalVerses.push({
          id: counter,
          verse: bible[book][chapter][counter]
            ? bible[book][chapter][counter]
            : "no existe este versiculo!",
        });
        counter++;
      }
    }
    setResult(finalVerses);
  };

  return (
    <div className="App">
      <form onSubmit={handleFind}>
        <label htmlFor="book">Book: </label>
        <input id="book" type="text" value={book} onChange={handleBook} />

        <label htmlFor="chapter">Chapter: </label>
        <input
          id="chapter"
          type="text"
          value={chapter}
          onChange={handleChapter}
        />

        <label htmlFor="verse">Verse: </label>
        <input id="verse" type="text" value={verse} onChange={handleVerse} />

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
        <p>no existe ese capitulo</p>
      )}
    </div>
  );
}

export default App;
