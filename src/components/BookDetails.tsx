import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Book } from '../interfaces';

/*import React from 'react';

const BookDetails: React.FC = () => {



  return (
    <div>
      <h2>Book Details</h2>
      {}
    </div>
  );
};

export default BookDetails;
*/

interface Props {
  onSave: (book: Book) => void;
  onUpdate: (book: Book) => void;
  selectedBook: Book;

}

const BookDetails: React.FC<Props> = (props: Props) => {

  let emptyBook: Book = {
    id: -1,
    title: "",
    author: "",
    publicationDate: new Date(),
    isbn: "",
    price: 0,
    active: true,
  };

  const [selectedBook, setBook] = useState<Book>(emptyBook);

  useEffect(() => {
    if (props.selectedBook.active) {
      setBook(props.selectedBook);
    } else {
      handleClear();
    }
  // eslint-disable-next-line
  }, [props.selectedBook])

  // if (!props.selectedBookIgnored) {
  //   setBook(props.selectedBook)
  // }


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook(prevBook => ({ ...prevBook, [name]: value }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBook(prevBook => ({ ...prevBook, publicationDate: new Date(value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedBook.id !== -1) {
      props.onUpdate(selectedBook);
    } else {
      props.onSave(selectedBook);
    }

  };

  const handleClear = () => {
    setBook(emptyBook);
  };

  return (
    <>
      <h2>Book Details:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="field1"
            name="title"
            value={selectedBook.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="field2"
            name="author"
            value={selectedBook.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="field3"
            name="isbn"
            value={selectedBook.isbn}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="field4"
            name="price"
            value={selectedBook.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <input
            type="date"
            id="field5"
            name="publicationDate"
            value={selectedBook.publicationDate.toISOString().substr(0, 10)}
            onChange={handleDateChange}
            required
          />
        </div>
        <button id='saveButton' type='submit'>Save</button>
      </form>

      <button id='clearButton' onClick={handleClear} >Clear</button>
    </>
  );
};

export default BookDetails;