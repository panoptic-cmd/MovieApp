import { useState, useEffect } from "react";

function TvFetchTest() {
  const [series, setSeries] = useState();

  console.log("useState:____Series_____", series);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/tv/popular";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
      },
    };
    const seriesFetch = async () => {
      const response = await fetch(url, options);
      const newSeries = await response.json();
      // console.log("Primeiro filme:", newMovies.results[0].original_title);
      setSeries(newSeries);
    };

    seriesFetch();
  }, []);

  return <div></div>;
}

export default TvFetchTest;
