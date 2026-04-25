import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetailsProps {
    // Define any props if needed, though for this component we'll fetch data based on URL params
}

const MovieDetails = (props: MovieDetailsProps) => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        if (movieId) {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setMovie(data);
                });
        }
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetails;
