import React, {Component, Fragment} from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Routes from "../routes/Index";
import App from "../components/App";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../components/About";
import Home from "../components/Home";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import AllBooks from "../components/AllBooks";
import Search from "../components/Search";

class Navbar extends Component {

  render() {
    return (
      // <p> Test</p>


      <HashRouter>
         <div>
          <ul className="Navbar">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search For A Book</NavLink></li>
            <li><NavLink to="/all">Browse All Books</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
            <Route path="/all" component={AllBooks}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>

    );
  }
}

export default Navbar;
