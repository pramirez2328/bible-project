import "./App.css";
import React, { useState } from "react";
import bible from "./obj";

function App() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [result, setResult] = useState("");

  const handleBook = (e) => setBook(e.target.value);
  const handleChapter = (e) => setChapter(e.target.value);
  const handleVerse = (e) => setVerse(e.target.value);

  const handleFind = (e) => {
    e.preventDefault();
    setResult(bible[book][chapter][verse]);
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
      {result}
    </div>
  );
}

export default App;
