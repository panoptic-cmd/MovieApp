import { useState, useEffect } from "react";

interface IGenre {
  id: number;
  name: string;
  results: string;
}

interface IGenresResponse {
  genres: IGenre[];
}

function fetchTest() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const url = "https://api.themoviedb.org/3/movie/popular";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
    },
  };

  const fetchGenres = async () => {
    const response = await fetch(url, options);
    const data: IGenresResponse = await response.json();
    console.log("data logggggg", data);

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // const fetchCountries = async () => {
  //   const response = await fetch(
  //     "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,continents,currencies,subregion",
  //   );
  //   const newCountries = await response.json();
  //   setCountries(newCountries);
  // };

  return (
    <div>
      <h1>generos de filmes</h1>
      <ul>
        {genres.map((genre) => (
          <li>
            {" "}
            ID: {genre.id} - Name: {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default fetchTest;
