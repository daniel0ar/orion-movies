import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import MovieList from "./movie-list";
import SearchBar from "./search-bar";

const Index = () => {

    const [ movies, setMovies] = useState([]);
    const [ selectedMovie, setSelectedMovie] = useState();

    const client = axios.create({
        baseURL: "http://localhost:3031/movies" 
    });

    useEffect(() => {
        client.get('?_limit=10').then((res) => {
           setMovies(res.data);
        });
    }, []);
    

    const movieSearch = (term) => {
        client.get(`?title_like=${term}`)
            .then((res) => {
                setMovies(res.data);
            }).catch(err => console.log(err))
    };

    const movieSearchWait = _.debounce((term) => {movieSearch(term)},250);

    return (
        <div className="container mx-auto px-4">
            <h1>Orion Movies</h1>
            <a type="button" href="/new"
                className="cursor-pointer py-2 px-3 rounded-md shadow bg-indigo-600 hover:bg-indigo-700">
                New
            </a>
            <SearchBar onSearchTermChange={movieSearchWait}></SearchBar>
            <MovieList
                onMovieSelect={selectedMovie => setSelectedMovie(selectedMovie)}
                movies={movies}></MovieList>
        </div>
    )
}

export default Index;  