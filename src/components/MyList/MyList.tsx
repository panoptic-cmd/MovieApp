import MovieCard from "../../components/MovieCard/MovieCard";
import "./MyList.css";
import { useEffect, useState } from "react";

function MyList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/now_playing";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
      },
    };
    const fetchMovies = async () => {
      const response = await fetch(url, options);
      const newMovies = await response.json();
      console.log("newMovies:-----------", newMovies);
      setMovies(newMovies);
    };




    fetchMovies();
  }, []);
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
