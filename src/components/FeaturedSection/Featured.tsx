import styles from "./Featured.module.css";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import type { IMovieDetails, ITvDetails } from "../../types/MediaDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SelectButton from "../../assets/Selectbutton/SelectButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import HorizontalScroll from "../../assets/pagination/HorizontalScroll";

interface IFeaturedDetails<T> {
  results: T[];
  page: number;
  total_pages: number;
}

function FeaturedFilms() {
  const [activeType, setActiveType] = useState<"movie" | "tv">("movie");
  const [details, setDetails] = useState<IFeaturedDetails<
    IMovieDetails | ITvDetails
  > | null>(null);

  console.log("now playing:______________", details);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
      },
    };

    const fetchDetails = async () => {
      const endpoint =
        activeType === "movie" ? "movie/now_playing" : "tv/on_the_air";
      const url = await fetch(
        `https://api.themoviedb.org/3/${endpoint}`,
        options,
      );

      const details = await url.json();
      setDetails(details);
    };

    fetchDetails();
  }, [activeType]);

  if (!details) {
    return <div className="loading">loading</div>;
  }

  // const runtimeValue =
  //   "runtime" in details ? details.runtime : details.episode_run_time?.[0];

  // const ratingFixed = details?.vote_average?.toFixed(1);

  return (
    <div>
      <div>
        <div className={styles.filterBar}>
          <h2>Now Playing:</h2>
          <div className={styles.buttonGroup}>
            <SelectButton
              children="Movies"
              onClick={() => setActiveType("movie")}
              isActive={activeType === "movie"}
            />
            <SelectButton
              children="Shows"
              onClick={() => setActiveType("tv")}
              isActive={activeType === "tv"}
            />
          </div>
        </div>

        <div className={styles.featuredContainer}>
          <div className={styles.featuredFilm}>
            {details?.results?.map((card) => {
              const mediaName = "title" in card ? card.title : card.name;
              const releaseDate =
                "release_date" in card
                  ? card.release_date
                  : card.first_air_date;
              return (
                <FeaturedCard
                  key={card.id}
                  title={mediaName}
                  genres={card.genres || []}
                  rating={card.vote_average}
                  language={card.original_language}
                  date={releaseDate}
                  runtime={123}
                  coverImage={card.backdrop_path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedFilms;
