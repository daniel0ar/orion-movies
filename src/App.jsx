import React, { Component } from 'react';
import './App.css';

import MovieList from "./components/MovieList";

import movie1Img from './assets/img/movie-1.jpeg';
import movie2Img from './assets/img/movie-2.jpeg';
import movie3Img from './assets/img/movie-3.jpeg';
import movie4Img from './assets/img/movie-4.jpeg';
import movie5Img from './assets/img/movie-5.jpeg';

class App extends Component {

  constructor() {
    super();
    this.state = {movies: [], selectedMovie: null};
    this.movieSearch("");
  }

  movieSearch(term) {
    this.state = {
      movies: [
        {
          id: 1,
          title: "Movie 1",
          thumbnail: movie1Img
        },
        {
          id: 2,
          title: "Movie 2",
          thumbnail: movie2Img
        },
        {
          id: 2,
          title: "Movie 3",
          thumbnail: movie3Img
        },
        {
          id: 2,
          title: "Movie 4",
          thumbnail: movie4Img
        },
        {
          id: 2,
          title: "Movie 5",
          thumbnail: movie5Img
        },
      ],
      selectedMovie: {
        id: 1,
        title: "Movie 1",
        thumbnail: movie1Img
      }
    }
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <h1>Orion Movies</h1>
        <MovieList
          onMovieSelect={selectedMovie => this.state = {selectedMovie}} 
          movies={this.state.movies}></MovieList>
      </div>
    )
  }
}

export default App;
