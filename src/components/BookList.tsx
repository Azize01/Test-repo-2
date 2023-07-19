import React from 'react';
import { Book } from '../interfaces';
import { useState } from 'react';

interface Props {
  books: Book[];
  onSelectedBook: (data: Book ) => void;
  onDeletedBook: (books: Book[]) => void;
}

const BookList: React.FC<Props> = (props: Props) => {
  //const [selectedBookId, setSelectedBookId] = useState<number | null>(props.books.length === 0 ? null : props.books[0].id);
  const [isBookDeleted] = useState(false);
  const [selectedBook,setBook] = useState<Book>();
  const handleClick = (id: number,ignoreItem: boolean) => {
    let foundBook = props.books.find((item) => item.id === id) as Book;
  

    props.onSelectedBook(foundBook);
  
  };

  const handleDelete = (id: number) => {
    let deletedBook = props.books.find((item) => item.id === id) as Book;
    deletedBook.active = false;
    setBook(selectedBook);
    const updatedBooks = props.books.filter((book) => book.id !== id);
    props.onDeletedBook(updatedBooks);
  };

  return (
    <>
      <h2>Book List</h2>

      {props.books.length === 0 ? <h3>No Books found</h3> : null}
      <ul>
        {props.books.map((item) => (
          <li key={item.id} onClick={(e) => { handleClick(item.id,isBookDeleted) }}>
            <p className='id'>{item.id}</p>
            <p className='field1'>{item.title}</p>
            <p className='field2'>{item.author}</p>
            <p className='field3'>{item.isbn}</p>
            <p className='field4'>{item.price}</p>
            <p className='field5'>{item.publicationDate.toString()}</p>

            <button className="deleteButton" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
