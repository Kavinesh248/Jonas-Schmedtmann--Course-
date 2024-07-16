const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Destructuring arrays
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

const [, , thirdBook] = books;
// console.log(thirdBook);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring objects
// const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

const { keywords: tags } = firstBook;
// console.log(tags);

const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);

let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = firstBook);
// console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
// console.log(bookRating);

const getYear = function (year) {
  return year.split("").splice(0, 4).join("");
};

const printBookInfo = function ({ title, author, publicationDate }) {
  // console.log(`${title} by ${author}, in the year ${getYear(publicationDate)}`);
};
printBookInfo({ ...firstBook });

// Spread operator
const bookAuthors = [...firstBook.author, ...secondBook.author];
// console.log(bookAuthors);

const spellWord = function (string) {
  // console.log(...string);
};
spellWord("kavinesh");

// Rest operator
const [mainKeyword, ...rest] = firstBook.keywords;
// console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = secondBook;
// console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, authors) {
  // console.log(`"The book ${title}" has ${authors.length} authors`);
};
printBookAuthorsCount(firstBook.title, firstBook.author);

// Short circuiting
const hasExamplesInJava = function (books) {
  // console.log(books.programmingLanguage === "Java" || "no data available");
};
hasExamplesInJava(books[0]);

for (i = 0; i < books.length; i++) {
  // books[i].onlineContent &&
  //   console.log(`"${books[i].title}" provides online content`);
}

// Nullish coalescing operator
for (i = 0; i < books.length; i++) {
  // books[i].onlineContent ??
  //   console.log(`"${books[i].title}" has no data about its online content`);
}

// Logical assignment operator
for (i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

for (i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  // console.log(books[i].highlighted);
}

// Looping arrays: The for-of Loop
let sumPages = 0;
for (const { pages } of books) {
  sumPages += pages;
}
// console.log(sumPages);

const allAuthors = new Array();
// My solution
for (const { author } of books) {
  if (typeof author === "string") allAuthors.push(author);
  else allAuthors.push(...author);
}

// for (const book of books) {
//   if (typeof book.author === "string") {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }
// const authorOrder = Object.entries(allAuthors);
// console.log(allAuthors);
// console.log(authorOrder[0]);

for (const entry of allAuthors.entries()) {
  // console.log(`${entry + 1}. ${author}`);
}
/**
 Object.entries():

  * Converts an object (including arrays) into an array of key-value pairs.
  * The keys in the resulting array are strings.

Array.prototype.entries():

  * Returns an iterator for an array that contains key-value pairs.
  * The keys in these pairs are numbers (the array indices).
 
*/

// Enhanced Object Literals
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const [title, author, publisher] = bookData;

const newBook = {
  [title[0]]: title[1],
  [author[0]]: author[1],
  [publisher[0]]: publisher[1],
};
// const newBook = {};
// bookData.forEach(function ([key, value]) {
//   console.log(key, value);
//   // newBook[key] = value;
// });

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

// console.log(newBook);

const getFirstKeyword = function (book) {
  const keyword = book.keywords?.[0];
  // console.log(keyword);
};
getFirstKeyword(books[0]);

// console.log(firstBook);

// Looping arrarys, entries, keys, values
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
// console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// Sets
const allKeywords = [];

for (const { keywords } of books) {
  allKeywords.push(...keywords);
}
// console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);
uniqueKeywords.add("coding").add("science");
uniqueKeywords.delete("business");

const uniqueKeywordsArr = [...uniqueKeywords];
uniqueKeywords.clear();
// console.log(uniqueKeywords);

// Maps Fundamentals

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
bookMap.set("pages", 464);

// console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

// console.log(bookMap.size);

if (bookMap.has("author")) {
  // console.log("The author of the book is known");
}

// Maps: Iteration
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// console.log(Object.entries(books[0]));

for (const [key, value] of firstBookMap) {
  // if (typeof value === "number") console.log(key);
}

// Working with strings

const isbn = books[0].ISBN;
// console.log(isbn[6], isbn[4], isbn[9], isbn[8]);

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
// console.log(quote.indexOf("chess"));

// console.log(quote.slice(-6));

// const isContributor = function (author) {
//   if (author.includes("contributor")) {
// console.log(author);
//   }
// };

function isContributor(author) {
  return author.lastIndexOf("(Contributor)") !== -1;
}
// console.log(isContributor("Julie Calismen (Contributor)"));

const normalizeAuthorName = function (author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(" "));

  let lastName = "";
  if (author.indexOf(" ") === author.lastIndexOf(" ")) {
    lastName = author.slice(author.indexOf(" ") + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(" ") + 1, author.lastIndexOf(" "));
  }

  const authorFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const authorLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  // console.log(authorFirstName, authorLastName);
};

normalizeAuthorName("kaviNeSH SussMan (Contributor)");

// console.log(books[1].title.replace("Programs", "Software"));

const logBookTheme = function (book) {
  if (book.startsWith("Computer")) {
    console.log(`This book is about computers`);
  } else if (book.includes("algoriths") && book.includes("structures")) {
    console.log(`This book is about algorithms and data structures`);
  } else if (
    (book.endsWith("system") || book.endsWith("systems")) &&
    !title.includes("operating")
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

logBookTheme("some of the book operating and system");

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";
const logBookCategories = function (bookCategory) {
  // return bookCategory.replaceAll(";", " ").replaceAll(" ", "\n");
  const category = bookCategory.split(";");
  console.log(category);
  for (const book of category) {
    console.log(book);
  }
};
logBookCategories(bookCategories);

const getKeywordsAsStrings = function (books) {
  const keywords = [];
  for (const book of books) {
    keywords.push(...book.keywords);
  }
  const unique = [...new Set(keywords)];
  return unique.join(";");
};

console.log(getKeywordsAsStrings(books));

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

const logBookChapters = function (chapter) {
  for (const [title, page] of chapter) {
    console.log(`${title.padEnd(20, "_")} ${page}`);
  }
};
logBookChapters(bookChapters);

/* Data used in exercises */
const books2 = [
  {
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure"],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
  },
  {
    title: "The Cyberiad",
    publicationDate: 1965,
    author: "Stanislaw Lem",
    genres: ["science fiction"],
    otherLanguagesTitle: {
      polish: "Cyberiada",
      spanish: "Ciberiada",
      french: "Cybériade",
    },
  },
  {
    title: "Dune",
    publicationDate: 1965,
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    filmAdaptation: true,
    otherLanguagesTitle: {},
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
  },
  {
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    filmAdaptation: true,
    otherLanguagesTitle: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = (genre) =>
  books.filter((book) => book.genres.includes(genre));
const getBooksAsArrays = () => books.map((book) => Object.entries(book));
const getBookAuthors = () => books.map((book) => book.author);

/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
      Leave the rest of the books unused. */

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */

/* D) Are you ready for some hard-core destructuring? 😄
      The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
      Now, you have an array of arrays of arrays.
      Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
      Use the 'let' statement because the 'author' variable may change later. */

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */

/* C) The book objects aren't consistent in their form.
      For example, the second book doesn't have the 'filmAdaptation' property.
      Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */

/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
      Destructure the author of the third book into existing variable called 'author'. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
      Reassign the 'authors' variable below so that it contains both — already existing authors,
      and authors returned from the getBookAuthors() function. Use the spread syntax. */
let authors = ["George Orwell", "Aldous Huxley"];

/* B) The console.log() method can take multiple arguments and log them to the console.
      First, log the 'authors' array as it is (as one argument).
      Second, log the elements of the 'authors' array, but this time use the spread syntax.
      Compare the outputs. */

/* C) The spread syntax can be used with other iterables, for example, strings.
      Create a new variable called 'firstNameArray', and spread the 'firstName' string
      so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
const firstName = "John";

/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
      and assign an object to it. This object should have all the properties of the second book from the 'books' array,
      plus the missing 'filmAdaptation' property set to false. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  4) REST PATTERN AND PARAMETERS             *
 *  ********************************************
 */

/* A) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */

/* B) This time you'll write a function utilizing the power of rest parameters.
      This function named as list() should output a list with a title to the console.
      The first argument it takes is the "title" of the list (string),
      the rest of arguments are list "items" (as many as you want) that will be displayed under the title.
      Example:
      list('My favorite books', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');
      Output:
      My favorite books:          <-- title
      1) Brave New World          <-- list item
      2) The Great Gatsby         <-- list item
      3) Pride and Prejudice      <-- list item
      ...
     */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  5) SHORT CIRCUITING (&& and ||)            *
 *  ********************************************
 */

/* A) Each book has the 'otherLanguagesTitle' property, which stores an object containing the language as a key,
      and the title of the book in that language as a value.
      Example 'otherLanguagesTitle' property:
      otherLanguagesTitle: {
        spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux'
      }
      Write a function called 'getTitleInSpanish' that takes a 'book' object as an argument,
      and returns a title in Spanish or a string "No data available" if there is no title in Spanish.
      Using the 'if' statement or the ternary operator is not allowed. */

/* B) Loop over the 'books' array, and for each book check if it has the title in Spanish and Korean.
      If it's true, log a string "<title> by <author> has title in Spanish and Korean" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */

/* C) Loop over the 'books' array, and for each book check if it has the title in Portuguese or Spanish, but not in both.
      If it's true, log a string "<title> by <author> has title in Portuguese or Spanish, but not in both" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */
