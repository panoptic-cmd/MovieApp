import styles from "../MovieCard/MovieCard.module.css";
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
      <div className={styles.movieCardContainer}>
        <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={title} />
        <span>{title} </span>
        <span> {rating.toFixed(1)}</span>
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;
