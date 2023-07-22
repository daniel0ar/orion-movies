import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import MovieList from "./components/MovieList";

class App extends Component {

  constructor() {
    super();
    this.state = {movies: [], selectedMovie: null};
    this.movieSearch("");
  }

  movieSearch(term) {
    axios.get('http://localhost:3031/movies')
    .then(res => 
        this.setState({
          movies: res.data,
          selectedMovie: res.data[0]
        })
      ).catch(err => console.log(err))
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
