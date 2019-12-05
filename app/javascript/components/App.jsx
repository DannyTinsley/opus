import React, { useState } from 'react';
import Routes from "../routes/Index";
import axios from 'axios';

// export default props => <>{Routes}</>;

// // App.js
// import React from 'react';
// import './App.css';

const App = () => {

//Google Books API link
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";


    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e) => {
      setSearchTerm(e.target.value);
    }

  const [books, setBooks] = useState({ items: [] });

  const fetchBooks = async () => {
        // Ajax call to API using Axios
        const result = await axios.get(`${GOOGLE_BOOKS_API}?q=${searchTerm}`);
        // Books result
        console.log(result.data);
        setBooks(result.data);
    }

    const bookAuthors = authors => {
    if (authors.length <= 2) {
          authors = authors.join(' and ');
        } else if (authors.length > 2) {
          let lastAuthor = ' and ' + authors.slice(-1);
          authors.pop();
          authors = authors.join(', ');
          authors += lastAuthor;
        }
        return authors;
      };

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call fetch books async function
        fetchBooks();
    }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="Harry Potter, The Lord of the Rings, etc...,"
            value={searchTerm}
            onChange={onInputChange}
            />
          <button type="submit">Search</button>
        </label>
      </form>

      <ul>
    {
      books.items.map((book, index) => {
        return (
          <li key={index}>
            <div>
              <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
              <div>
                <h3>{book.volumeInfo.title}</h3>
                <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                <p>{book.volumeInfo.publishedDate}</p>
              </div>
            </div>
            <hr />
          </li>
        );
      })
    }
  </ul>
    </section>
  );
};

export default App;
