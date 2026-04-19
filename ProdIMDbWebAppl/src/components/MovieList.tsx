import { Routes, Route, Link } from "react-router-dom";
import Movie from "./Movie";

const MovieList = () => {
    return (
        <div>
            <h4>
                MovieList
            </h4>

            <nav>
                <ul>
                    <li><Link to="/yash/movielist/1">Movie 1</Link></li>
                    <li><Link to="/movielist/2">Movie 2</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path=":movieId" element={<Movie />} />
            </Routes>
        </div>
    )

}

export default MovieList;