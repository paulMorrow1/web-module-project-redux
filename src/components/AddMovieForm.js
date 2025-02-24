import React, { useState } from "react";
import * as actions from "./../actions/movieActions";
import { connect } from "react-redux";
import { customAlphabet } from "nanoid";
import { Link, useHistory } from "react-router-dom";

const AddMovieForm = ({ addMovie }) => {
  const { push } = useHistory();

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nano = customAlphabet("1234567890", 10);
    const id = Number(nano());
    addMovie({
      id,
      title: movie.title,
      director: movie.director,
      metascore: Number(movie.metascore),
      genre: movie.genre,
      description: movie.description,
    });
    push(`/movies/${id}`);
  };

  const { title, director, genre, metascore, description } = movie;
  return (
    <div className="col">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Add Movie</h4>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  value={title}
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Director</label>
                <input
                  value={director}
                  onChange={handleChange}
                  name="director"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  value={genre}
                  onChange={handleChange}
                  name="genre"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Metascore</label>
                <input
                  value={metascore}
                  onChange={handleChange}
                  name="metascore"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={handleChange}
                  name="description"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">
                Add
              </button>
              <Link to={`/movies`}>
                <input
                  type="button"
                  className="btn btn-default"
                  value="Cancel"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { ...actions })(AddMovieForm);
