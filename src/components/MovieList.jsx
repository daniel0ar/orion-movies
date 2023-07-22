import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = (props) => {
    const movieItems = props.movies.map((movie) => {
        return <MovieListItem 
            onMovieSelect={props.onMovieSelect}
            key={movie.id}
            movie={movie}></MovieListItem>
    })
    
    return (
        <div className="flex flex-row">
            {movieItems}
        </div>
    );
};

export default MovieList;