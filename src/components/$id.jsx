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
        <div className="bg-cover ax-w-lg mx-auto h-80" style={{backgroundImage: `url(${selectedMovie.banner})` }}>
            <div className="mt-40">
                <div className="container mx-auto px-4">
                    <a className="shadow bg-violet-500 hover:bg-violet-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href="/">
                        Go Back
                    </a>
                    <div className="mt-8">
                        <h1 className="mt-8">{selectedMovie.title}</h1>
                        <div className="mt-10">
                            <h3>Rating: {selectedMovie.rating}</h3>
                            <p>Release: {selectedMovie.release}</p>
                            <p>Stars: {selectedMovie.cast}</p>
                        </div>
                    </div>
                    <button className="mt-5 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={deleteMovie}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail