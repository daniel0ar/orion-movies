import { Component } from 'react';
import axios from 'axios';

class New extends Component {

  constructor() {
    super();
    this.state = { newMovieId: null, title: null, genre: null, rating: null };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addMovie(e);
  };

  addMovie = (e) => {
    var movie = {
      "title": e.target.title.value,
      "genre": e.target.genre.value,
      "rating": e.target.rating.value,
      "release": e.target.release.value,
      "cast": [],
      "thumbnail": "/src/assets/img/movie-default.jpeg"
    };

    axios.post('http://localhost:3031/movies', movie)
      .then(res => {
        console.log(res.data.id);
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container flex place-items-center min-h-screen px-4 mx-auto">
        <h1>New Movie</h1>
        <a className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href="/">
          Go Back
        </a>
        <form className="w-full max-w-md mx-auto" onSubmit={this.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="title">
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="title" type="text" placeholder="Movie Title" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="genre">
                Genre
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="genre" type="text" placeholder="Horror" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="rating">
                Rating
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="rating" type="text" placeholder="Rating" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="release">
                Release Date
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="release" type="date" placeholder="Rating" />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='submit'>
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default New;