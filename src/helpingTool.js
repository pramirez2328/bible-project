const book = [];
let bookArrays = book.map((chapter) => {
  return chapter.match(/[^\d]+\w*\s+$/gm);
});

let chapter = 31,
  verse = 1;
let chapterObj = {},
  verseObj = {};

bookArrays.forEach((v) => {
  v.forEach((insideVerse) => {
    verseObj[verse] = insideVerse;
    verse++;
  });
  chapterObj[chapter] = verseObj;
  chapter++;
  verse = 1;
  verseObj = {};
});

console.log(chapterObj);
