import React, { useState } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Routes from "../routes/Index";
import axios from 'axios';
import Navbar from "../components/Navbar";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AllBooks from "../components/AllBooks";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }


  componentDidMount() {
        const reviewsURL = "../reviews/index";
        fetch(reviewsURL)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ reviews: response }))
          .catch(() => this.props.history.push("/"));
    }



    render() {
      const { reviews } = this.state;
      const allReviews = reviews.map((review, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{review.title}</h5>
              <HashRouter>
              <NavLink to={`/review/${review.id}`} className="btn custom-button">
                View Review
              </NavLink>
              </HashRouter>
            </div>
          </div>
        </div>
      ));
      const noReview = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No reviews yet. Why not
            <HashRouter>
            <NavLink to="/new_review">create one</NavLink>
            </HashRouter>
          </h4>
        </div>
      );

      return (
        <>
          <section>
            <div>
            <h1 className="reviewsTitle">Reviews</h1>
            <img className="reviewsImage" alt="reviews" src="https://appmanager.co.uk/cloud/frontend/web/image/view/news/4070361438167758.jpg?height=1280&width=1280&scale_up"/>
            <p className="leRight lead text-muted">
              Here are some reviews to help you choose your next book!
            </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-right mb-3">
                <HashRouter>
                <NavLink to="/review" className="btn custom-button">
                  Create New Review
                </NavLink>
                </HashRouter>
              </div>
              <div className="reviewCards">
              <div className="row">
                {reviews.length > 0 ? allReviews : noReview}
              </div>
              </div>
            </main>
          </div>
        </>
      );
    }

}
export default Reviews;
