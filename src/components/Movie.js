import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as movieActions from "../actions/movieActions";
import * as favActions from "../actions/favoritesActions";

const Movie = ({
  movies,
  deleteMovie,
  displayFavorites,
  addFavorite,
  favorites,
  removeFavorite,
}) => {
  const { id } = useParams();
  const { push } = useHistory();

  const movie = movies.find((movie) => movie.id === Number(id));

  const handleDelete = () => {
    deleteMovie(movie.id);
    removeFavorite(movie.id);
    push("/movies");
  };

  const isFavorited = favorites.some((favorite) => favorite.id === movie.id);

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {displayFavorites ? (
                  <span className="favorite">
                    <button
                      type="button"
                      className="m-2 btn btn-dark"
                      disabled={isFavorited}
                      onClick={() => addFavorite(movie)}
                    >
                      Favorite
                    </button>
                  </span>
                ) : null}
                <span className="delete">
                  <button
                    type="button"
                    className="m-2 btn btn-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    displayFavorites: state.favMovies.displayFavorites,
    favorites: state.favMovies.favorites,
  };
};

export default connect(mapStateToProps, { ...movieActions, ...favActions })(
  Movie
);
