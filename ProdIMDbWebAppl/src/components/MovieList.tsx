import { Link } from "react-router-dom";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovies(data.results)
    });
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h4>
                MovieList
            </h4>

            <div className="movieList">
                {movies.map((movie: any, idx: number) => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={idx}>
                            <Movie {...movie}></Movie>
                        </Link>
                    )
                })}
            </div>
        </div>
    )

}

export default MovieList;