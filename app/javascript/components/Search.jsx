import React, { useState } from 'react';
import { NavLink, HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../routes/Index";
import axios from 'axios';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../components/About";
import Home from "../components/Home";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import AllBooks from "../components/AllBooks";
import App from "../components/App";



const Search = () => {

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
    return(
      // <div className= "allContent">
<React.Fragment>
      <section>
        <form className="searchbar" onSubmit={onSubmitHandler}>
          <label>
            <span>Search for books</span>
            <br/>
            <input
              type="search"
              placeholder="book title or author"
              value={searchTerm}
              onChange={onInputChange}
              />
            <button type="submit" className="searchButton" >Search</button>
          </label>
        </form>

    <React.Fragment>
    <div className="mainContent">

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
                  <p>{book.volumeInfo.description}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <hr />
            </li>

          );
        })
      }
    </ul>
      </div>
    </React.Fragment>
      </section>
      </React.Fragment>
    // </div>
    )
  }



export default Search;
