import { useState, useEffect } from "react";
import axios from 'axios';

const MovieDetail = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    const client = axios.create({
        baseURL: "http://localhost:3031/movies"
    });

    useEffect(() => {
        console.log(window.location.pathname);
        client.get(`${window.location.pathname}`).then((res) => {
            console.log(res.data);
            setSelectedMovie(res.data);
        });
    }, []);

    const deleteMovie = () => {
        client.delete(window.location.pathname).then((res) => {
            console.log(res);
            window.location = '/';
        });
    };

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="img-container">
                <img src={selectedMovie.banner} alt="banner" />
            </div>
            <a className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href="/">
                Go Back
            </a>
            <div className="container mx-auto px-4">
                <h1>{selectedMovie.title}</h1>
                <h3>Rating: {selectedMovie.rating}</h3>
                <p>Release: {selectedMovie.release}</p>
                <p>Stars: {selectedMovie.cast}</p>
            </div>
            <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={deleteMovie}>
                Delete
            </button>
        </div>
    );
}

export default MovieDetail