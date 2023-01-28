import React from 'react';

function MovieList({movies}) {
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <div className="movie-tile" key={movie.id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default MovieList;