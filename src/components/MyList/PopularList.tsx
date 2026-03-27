import MovieCard from "../MovieCard/MovieCard";
import "./PopularList.css";
import { useEffect, useState } from "react";
import type { IApiResponse } from "../../types/MovieType";


function MyList() {
  const [movies, setMovies] = useState<IApiResponse>();

  console.log("useState:___MOVIES______", movies);

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
      const newMovies: IApiResponse = await response.json();
      // console.log("Primeiro filme:", newMovies.results[0].original_title);
      setMovies(newMovies);
    };

    fetchMovies();
  }, []);

  // const movieTitles =
  //   movies?.results?.map((movie) => movie.original_title) || [];
  // // console.log("log 2::::::::::::", movieTitles);

  // const movieRating = movies?.results?.map((movie) => movie.vote_average) || [];
  // console.log("ratings...", movieRating);

  const movieData =
    movies?.results?.map((movie) => ({
      title: movie.original_title,
      rating: movie.vote_average,
      image: movie.backdrop_path,
    })) || [];




  return (
    <div>
      <div className="movie-popular-container">
        <h2>Popular</h2>
        <div className="movie-list-grid">
          {movieData?.map((movie) => (
            <MovieCard
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyList;
