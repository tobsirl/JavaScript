// factory function to create books
export function createBook(title, author, isbn) {
  return {
    title,
    author,
    isbn,
  };
}

export const book1 = createBook('Harry Potter', 'JK Rowling', 'AB123');

export const book2 = createBook(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'CD456'
);

export const book3 = createBook('Moby-Dick', 'Herman Melville', 'EF789');

export const book4 = createBook('The Hobbit', 'J.R.R. Tolkien', 'GH012');

export const book5 = createBook(
  'The Catcher in the Rye',
  'J.D. Salinger',
  'IJ345'
);
