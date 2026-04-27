import { Link, useParams } from "react-router-dom";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import './MovieListStyles.css';
import Pagination from "./Pagination";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const { page } = useParams();
    const currentPage = page ? parseInt(page, 10) : 1;

    const fetchMovies = (pageNum: number) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
            setTotalPages(data.total_pages);
    });
    }

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    return (
        <div>
            <h4>
                MovieList
            </h4>

            <div className="movie-list">
                {movies.map((movie: any, idx: number) => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={idx}>
                            <Movie {...movie}></Movie>
                        </Link>
                    )
                })}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    )

}

export default MovieList;