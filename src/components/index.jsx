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

    const pageSize = 8;

    useEffect(() => {

        setTitles();

        getMovies('?_sort=title', setMoviesAll);
        getMovies('?_sort=rating', setMoviesTopRated);
        getMovies('?_sort=genre', setMoviesGenre);

    }, []);

    const getMovies = (criteria, setMoviesFunction) => {
        client.get(criteria).then((res) => {
            if(res.data.length > 0) {
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
        <div>
            <a type="button" href="/new"
                className="mt-9 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 rounded-lg text-center font-medium inline-block text-white">
                New
            </a>
            <SearchBar onSearchTermChange={movieSearchWait}></SearchBar>
            <MovieList movies={movies_toprated} message={""} 
                title={title_toprated} pageSize={pageSize}></MovieList>
            <MovieList movies={movies_genre} message={""} 
                title={title_genre} pageSize={pageSize}></MovieList>
            <MovieList movies={movies_allsorted} message={message} 
                title={title_allsorted} pageSize={pageSize}></MovieList>
        </div>
    )
}

export default Index;  