import styles from "./CastList.module.css";
import ActorCard from "./ActorCard/ActorCard";
import { useState, useEffect } from "react";

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

  console.log("cast_____", cast);

  console.log("actor index 7", cast[7]?.name);

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
    <div className={styles.container}>
      {cast.slice(0, 20).map((actor) => {
        // variaveis para os atores - se tem profile_path.
        // const actorName = actor.name;
        // const profileImg = actor.profile_path
        //   ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
        //   : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";

        // return do map
        return (
          <div>
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
  );
}

export default CastList;
