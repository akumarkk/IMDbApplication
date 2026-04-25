import './Movie.css';

interface MovieProps {
    title: string;
    poster_path: string;
    overview: string;
}

function Movie({ title, poster_path, overview }: MovieProps) {
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;