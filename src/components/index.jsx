import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import MovieList from "./movie-list";
import SearchBar from "./search-bar";

const Index = () => {

    const [ movies_toprated, setMoviesTopRated] = useState([]);
    const [ movies_genre, setMoviesGenre] = useState([]);
    const [ movies_allsorted, setMoviesAll] = useState([]);
    const [ message, setMessage] = useState([]);
    const [ title_toprated, setTitleTopRated] = useState([]);
    const [ title_genre, setTitleGenre] = useState([]);
    const [ title_allsorted, setTitleAll] = useState([]);

    const client = axios.create({
        baseURL: "http://localhost:3031/movies" 
    });

    useEffect(() => {

        setTitles();

        getMovies('?_sort=title', setMoviesAll);
        getMovies('?_sort=rating', setMoviesTopRated);
        getMovies('?_sort=genre', setMoviesGenre);

        client.get().then((res) => {
            if(res.data.length > 0 ) {
                setMoviesTopRated(res.data);
                setMessage("");
            }
            else {
                setMoviesTopRated([]);
                setMessage("No movies to display");
            }
        });
    }, []);

    const getMovies = (criteria, setMoviesFunction) => {
        client.get(criteria).then((res) => {
            if(res.data.length > 0 ) {
                setMoviesFunction(res.data);
                setMessage("");
            }
            else {
                clearMovies();
                setMessage("No movies to display");
            }
        });
    }

    const clearMovies = () => {
        setMoviesTopRated([]);
        setMoviesGenre([]);
        setMoviesAll([]);
    };

    const setTitles = () => {
        setTitleTopRated("Top Rated");
        setTitleGenre("By Genre");
        setTitleAll("All Movies (A-Z)");
    };

    const clearTitles = () => {
        setTitleTopRated([]);
        setTitleGenre([]);
        setTitleAll([]);
    };
    

    const movieSearch = (term) => {
        clearTitles();
        setTitleAll("Results");

        client.get(`?title_like=${term}`)
            .then((res) => {
                if(res.data.length > 0 ) {
                    clearMovies();
                    setMoviesAll(res.data);
                    setMessage("");
                }
                else {
                    clearMovies();
                    setMessage("No movies match the search");
                }
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
            <MovieList movies={movies_toprated} message={""} title={title_toprated}></MovieList>
            <MovieList movies={movies_genre} message={""} title={title_genre}></MovieList>
            <MovieList movies={movies_allsorted} message={message} title={title_allsorted}></MovieList>
        </div>
    )
}

export default Index;  