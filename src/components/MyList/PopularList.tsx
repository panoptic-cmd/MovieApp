import MovieCard from "../MovieCard/MovieCard";
import "./PopularList.css";
import { useEffect, useState } from "react";
import type {
  IApiResponseMovies,
  IApiResponseSeries,
} from "../../types/PopularType";

function MyList() {
  const [movies, setMovies] = useState<IApiResponseMovies>();
  const [series, setSeries] = useState<IApiResponseSeries>();

  console.log("useState:___MOVIES______", movies);
  console.log("series_____", series);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
      },
    };
    const fetchMovies = async () => {
      const [responseMovies, responseSeries] = await Promise.all([
        fetch("https://api.themoviedb.org/3/movie/popular", options),
        fetch("https://api.themoviedb.org/3/tv/popular", options),
      ]);
      const newMovies: IApiResponseMovies = await responseMovies.json();
      const newSeries: IApiResponseSeries = await responseSeries.json();
      // console.log("Primeiro filme:", newMovies.results[0].original_title);
      setMovies(newMovies);
      setSeries(newSeries);
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

  const seriesData =
    series?.results?.map((series) => ({
      title: series.name,
      rating: series.vote_average,
      image: series.backdrop_path,
    })) || [];

  return (
    <div>
      <div className="movie-popular-container">
        <h2>Popular Movies</h2>
        <div className="movie-list-grid">
          {movieData?.map((movie) => (
            <MovieCard
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
            />
          ))}
        </div>
        <div>
          <h2>Popular Shows</h2>
          <div className="movie-list-grid">
            {seriesData?.map((series) => (
              <MovieCard
                title={series.title}
                rating={series.rating}
                image={series.image}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MyList;
