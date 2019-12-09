import React, { useState } from 'react';
import { NavLink, HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../routes/Index";
import axios from 'axios';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../components/About";
import Search from "../components/Search";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import AllBooks from "../components/AllBooks";
import App from "../components/App";

class Home extends React.Component {
      state = {
      books: [],
      isLoading: true,
      errors: null
    };

  // on load get books by latest published
    componentDidMount (){
      axios.get("https://www.googleapis.com/books/v1/volumes?q=orderBy=newest").then(response => {
        console.log(response);
        return response.json()
      }
   )
   // make sure to change the loading state to display the data
   .then(books => {
     this.setState({
       books: response.data.data.items,
       isLoading: false
     });
     console.log(response);
   })

   .catch(error => this.setState({ error: error.message, isLoading: false }));
      }


      render() {
        const { isLoading, books } = this.state;
        return (
          <React.Fragment>
          <div className="mainContent">
            <h1> Latest Books </h1>
              {!isLoading ? (
                books.map(book => {

                  return (
                    <ul>
                    <li key={id}>
                    <div>
                      <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                      <div>
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors }</p>
                        <p>{book.volumeInfo.description}</p>
                        <p>{book.volumeInfo.publishedDate}</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                    </ul>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </React.Fragment>
        );
      }





  //final curly brace
  }


export default Home;
