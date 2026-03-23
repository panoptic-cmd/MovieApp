import MovieCard from "../../components/MovieCard/MovieCard";
import "./MyList.css"

function MyList() {
  return (
    <div>
      <div className="movie-container">
        <h2>mylist</h2>

        <div className="movie-list">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default MyList;
