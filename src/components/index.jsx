import React, { Component } from 'react';
import axios from 'axios';

import MovieList from "./movie-list";

class Index extends Component {
  
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
          <a type="button" href="/new"
            className="cursor-pointer py-2 px-3 rounded-md shadow bg-indigo-600 hover:bg-indigo-700">
            New
          </a>
          <MovieList
            onMovieSelect={selectedMovie => this.state = {selectedMovie}} 
            movies={this.state.movies}></MovieList>
        </div>
      )
    }
  }
  
export default Index;  