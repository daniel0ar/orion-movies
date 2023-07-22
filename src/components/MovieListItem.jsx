import React from 'react';

const MovieListItem = ({movie, onMovieSelect}) => {

    return (
        <div className='basis-1/8' onClick={() => onMovieSelect(movie)}>
            <div>
                <img src={movie.thumbnail}></img>
            </div>
            <div>
                {movie.title}
            </div>
        </div>
    );
}

export default MovieListItem;