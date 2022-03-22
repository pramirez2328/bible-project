import "./App.css";

function App() {
  return (
    <div className="App">
      <label htmlFor="book">Book: </label>
      <input id="book" type="text" />

      <label htmlFor="chapter">Chapter: </label>
      <input id="chapter" type="text" />

      <label htmlFor="verse">Verse: </label>
      <input id="verse" type="text" />
    </div>
  );
}

export default App;
