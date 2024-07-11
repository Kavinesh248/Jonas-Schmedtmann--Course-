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
