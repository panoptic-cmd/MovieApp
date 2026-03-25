import MovieCard from "../../components/MovieCard/MovieCard";
import "./MyList.css";
import { useEffect, useState } from "react";
import type {IMovie} from "../../types/MovieType"

function MyList() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  // console.log("useState:_________", movies);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/popular";
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
      console.log("fetch:--------", newMovies);
      setMovies(newMovies);
    };




    fetchMovies();
  }, []);


//   const movieEntries = Object.entries(movies);
// console.log("object.entries-movies:", movieEntries[2]);

// const movieResults = Object.values(movieEntries);
// console.log("object.values-movies:", movieResults);






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
