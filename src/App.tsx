import React, { useState } from 'react';

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import './styles/main.css';
import { Book } from './interfaces';

const App: React.FC = () => {

  let book1: Book = {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    publicationDate: new Date(),
    isbn: "234111aD234",
    price: 13,
    active: true,
  };

  let book2: Book = {
    id: 2,
    title: "Lord Of the Rings",
    author: "Tolkien",
    publicationDate: new Date(),
    isbn: "234aD2222334",
    price: 12,
    active: true,
  };

  let book3: Book = {
    id: 3,
    title: "Crime and Punishment",
    author: "Dostoyevski",
    publicationDate: new Date(),
    isbn: "234aD234",
    price: 12,
    active: true,
  };

  let booksInitial = [book1, book2, book3];

  const [books, setBooks] = useState(booksInitial);
  const [selectedBook, setBook] = useState<Book>(book1);

  const handleSaveBook = (book: Book) => {
    let booksLength = books.length + 1;
    book.id = booksLength;
    let bookArray = [...books, book] as Book[];
    setBooks(bookArray);

  };

  const handleBookUpdate = (book: Book) => {

    let bookIndex = books.findIndex((item) => item.id === book.id);
    let booksArr = [...books];
    let updatedBook = { ...books[bookIndex] };
    updatedBook = book;
    booksArr[bookIndex] = updatedBook;
    setBooks(booksArr);

  }
  const handleBookSelection = (book: Book) => {
    setBook(book);
  }
  const handleBookDelete = (bookArr: Book[]) => {
      let idIndex =1;
      for(let i =0; i < bookArr.length; i++){
        bookArr[i].id = idIndex++;
      }
      return bookArr;
  };

  return (
    <div className="container">
      <div className="navbar">Library Management System</div>
      <div className="content-list">
        <BookList books={books} onSelectedBook={handleBookSelection} onDeletedBook={(newBooks) => setBooks(handleBookDelete(newBooks))} />
      </div>
      <div className="content-details">
        <BookDetails onSave={handleSaveBook} onUpdate={handleBookUpdate} selectedBook={selectedBook} />
      </div>
      <div className="footer">© 2023 Library Management System. All rights reserved.</div>
    </div>
  );
};
export default App;