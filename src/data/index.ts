import ali from './ali.json';
import umar from './umar.json';
import galib from './galib.json';

// সব মনীষীর লিস্ট
export const authors = [ali, umar, galib];

// সব উক্তি একসাথে (Home Page এ দেখানোর জন্য)
export const allQuotes = [
  ...ali.quotes.map(q => ({ ...q, author: ali.author, slug: ali.slug })),
  ...umar.quotes.map(q => ({ ...q, author: umar.author, slug: umar.slug })),
  ...galib.quotes.map(q => ({ ...q, author: galib.author, slug: galib.slug })),
];