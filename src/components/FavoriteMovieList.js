import React from "react";
import { connect } from "react-redux";
import { removeFavorite } from "../actions/favoritesActions";

import { Link } from "react-router-dom";

const FavoriteMovieList = ({
  favorites,
  displayFavorites,
  removeFavorites,
}) => {
  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span
                className="material-icons"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  removeFavorites(movie.id);
                }}
              >
                remove_circle
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favMovies.favorites,
    displayFavorites: state.favMovies.displayFavorites,
  };
};

export default connect(mapStateToProps, { removeFavorites: removeFavorite })(
  FavoriteMovieList
);
