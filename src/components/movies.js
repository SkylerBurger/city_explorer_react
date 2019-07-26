import React, { Component } from 'react'

class Movies extends Component {

  render() {
    return (
      <>
        <h2>Results from the MovieDB API</h2>
        <ul>
          {this.props.movies.map(movie => (
            <li>
              <p><span>{movie.title}</span> was released on {movie.released_on}. {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
              <img src={movie.image_url} />
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Movies