import "../MovieCard/MovieCard.css";
import {Link} from 'react-router'

interface IMovieCardProps {
  id: number;
  type: "movie" | "tv"
  title: string;
  rating: number;
  image: string;
}
function MovieCard({ id, type, title, rating, image }: IMovieCardProps) {
  return (
    <div>
       <Link to={`/details/${type}/${id}`} style={{ textDecoration: 'none' }}>
      <div className="movieCard-container">
        <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={title} />
        <span>{title} </span>
        <span> {rating}</span>
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;
