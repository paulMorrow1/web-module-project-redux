import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFavorites } from "../actions/favoritesActions";

const MovieHeader = ({
  appTitle,
  movies,
  displayFavorites,
  toggleFavorite,
}) => {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <button className="btn btn-sm btn-primary" onClick={toggleFavorite}>
            <span>{displayFavorites ? "Hide" : "Show"} Favorites</span>
          </button>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appTitle: state.movies.appTitle,
    movies: state.movies.movies,
    displayFavorites: state.favMovies.displayFavorites,
  };
};

export default connect(mapStateToProps, { toggleFavorite: toggleFavorites })(
  MovieHeader
);
