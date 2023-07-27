import React from "react";
import MovieListItem from "./movie-list-item";

const MovieList = (props) => {
    const message = props.message;
    const title = props.title;
    const movieItems = props.movies.map((movie) => {
        return <MovieListItem 
            key={movie.id}
            movie={movie}></MovieListItem>
    })
    
    return (
        <div>
            <h3>{title}</h3>
            <p>{message}</p>
            <div className="flex flex-row">
                {movieItems}
            </div>
        </div>
    );
};

export default MovieList;