const books = [
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    author: 'Michael Crichton',
    title: 'Jurassic Park',
  },
  {
    author: 'Peter Wohlleben',
    title: 'Bäume',
  },
];

export default {
  Query: {
    books: () => books,
  },
};
