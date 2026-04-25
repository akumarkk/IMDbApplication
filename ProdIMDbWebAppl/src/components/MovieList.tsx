import { Routes, Route, Link } from "react-router-dom";
import Movie from "./Movie";
import Popular from "./Popular";
import TopRated from "./TopRated";
import { useEffect, useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY_HERE")
        .then(res => res.json())
        .then(data => setMovies(data));
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h4>
                MovieList
            </h4>

            <nav>
                <ul>
                    <li><Link to="1">Movie 1</Link></li>
                    <li><Link to="2">Movie 2</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path=":movieId" element={<Movie />} />
                <Route path="popular" element={<Popular />} />
                <Route path="top-rated" element={<TopRated />} />
            </Routes>
        </div>
    )

}

export default MovieList;