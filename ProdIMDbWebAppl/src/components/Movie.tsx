import { useParams } from 'react-router-dom';

interface MovieProps {
    title: string;
    poster_path: string;
    overview: string;
}

function Movie({ title, poster_path, overview }: MovieProps) {
  const { movieId } = useParams();

  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
    </div>
  );
}

export default Movie;