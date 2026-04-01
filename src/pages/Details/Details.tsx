import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { IMovie, ITv as ITv } from "../../types/PopularType";
import CastList from "../../components/CastList/CastList";

function DetailsPage() {
  const { id, type } = useParams();
  const [details, setDetails] = useState<IMovie | ITv | null>(null);

  console.log("details log:_____", details);

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
      //   try {

      const url = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}`,
        options,
      );
      // if (!url.ok) throw new Error("Error");
      const details = await url.json();
      setDetails(details);
      //   } catch (error) {
      //     console.error("Errr", error);
      //   }
    };

    fetchDetails();
  }, [id, type]);

  if (!details) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="details-container">
      {/* Imagem de fundo (Banner) */}
      <div className="backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          alt="Banner"
        />
      </div>

      <div className="content">
        {/* Título dinâmico */}
        <h1>{"title" in details ? details.title : details.name}</h1>

        <div className="info">
          <div className="text-details">
            <p className="overview">{details.overview}</p>
            <span className="rating">⭐ {details.vote_average.toFixed(1)}</span>
            <p className="date">
              Data:{" "}
              {"release_date" in details
                ? details.release_date
                : details.first_air_date}
            </p>
          </div>
        </div>

        <div className="castList">
          <CastList id={id} type={type} />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
