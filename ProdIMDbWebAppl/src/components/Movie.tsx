import { useParams } from 'react-router-dom';

function Movie() {
  const { movieId } = useParams();

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Details for movie ID: {movieId}</p>
    </div>
  );
}

export default Movie;