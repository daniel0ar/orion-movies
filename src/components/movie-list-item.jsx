import React from 'react';

const MovieListItem = ({movie}) => {

    return (
        <a href={`${movie.id}`}>
            <div className='basis-1/8'>
                <div>
                    <img src={movie.thumbnail}></img>
                </div>
                <div>
                    {movie.title}
                </div>
            </div>
        </a>
    );
}

export default MovieListItem;