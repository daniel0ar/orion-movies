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
                    <a className="mt-9 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 rounded-lg text-center font-medium inline-block text-white" href="/">
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
                    <button className="mt-9 px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium inline-block text-white" onClick={deleteMovie}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail