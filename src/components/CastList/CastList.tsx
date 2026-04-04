import styles from "./CastList.module.css";
import ActorCard from "./ActorCard/ActorCard";
import { useState, useEffect } from "react";
import Pagination from "../../assets/pagination/Pagination"

export interface CastMember {
  id: number;
  name: string;
  profile_path: string;
}

interface CastListProps {
  id: string | undefined;
  type: string | undefined;
}

function CastList({ id, type }: CastListProps) {
  const [cast, setCast] = useState<CastMember[]>([]);
//
  const [activeIndex, setActiveIndex] = useState(0);
//pagination component variable
  const totalItems = cast.slice(0, 15).length;


  
  //
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  const container = e.currentTarget;
  // Calcula qual o item que está mais ao centro/início do scroll
  const scrollPosition = container.scrollLeft;
  const itemWidth = 136; // Largura do ActorCard (ex: 120px + 16px gap)
  
  const newIndex = Math.round(scrollPosition / itemWidth);
  if (newIndex !== activeIndex) {
    setActiveIndex(newIndex);
  }
};

  // console.log("cast_____", cast);

  // console.log("actor index 7", cast[7]?.name);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
      },
    };

    const fetchCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits`,
        options,
      );
      const castResponse = await response.json();

      if (castResponse && castResponse.cast) {
        setCast(castResponse.cast);
      } else {
        setCast([]);
      }
    };
    fetchCast();
  }, [id, type]);

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>Cast</h2>
      <div className={styles.castGrid} onScroll={handleScroll}>
      {cast.slice(0, 20).map((actor) => {
        // variaveis para os atores - se tem profile_path.
        // const actorName = actor.name;
        // const profileImg = actor.profile_path
        //   ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
        //   : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
        // return do map
        return (
          <div key={actor.id} className={styles.cardWrapper}>
            <ActorCard
              key={actor.id}
              actor={actor}
            />
          </div>
          // <div key={actor.id} className={styles.card}>
          //   <img src={profileImg} alt={actorName} />
          //   <span>{actorName}</span>
          // </div>
        );
      })}
      </div>
      <Pagination total={totalItems} activeIndex={activeIndex}/>
    </div>
  );
}

export default CastList;
