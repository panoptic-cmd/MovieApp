import "../MovieCard/MovieCard.css";

interface IMovieCardProps {
  
  title: string;
  rating: number;
  image: string;
}
function MovieCard({  title, rating, image }: IMovieCardProps) {
  return (
    <div>
      <div className="movieCard-container">
        <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={title} />
        <span>{title} </span>
        <span> {rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
