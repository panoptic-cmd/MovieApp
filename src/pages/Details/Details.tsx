import { useParams } from "react-router";
import { useEffect, useState } from "react";
// import type { IMovie, ITv as ITv } from "../../types/PopularType";
import type { IMovieDetails, ITvDetails } from "../../types/MediaDetails";
import CastList from "../../components/CastList/CastList";
import Banner from "../../components/BannerDetailsPage/Banner";
import Synopsis from "../../components/Synopsis/Synopsis";
import ChipSection from "../../components/ChipSection/ChipSection";

function DetailsPage() {
  const { id, type } = useParams();
  const [details, setDetails] = useState<IMovieDetails | ITvDetails | null>(
    null,
  );

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

  const runtimeValue =
    "runtime" in details ? details.runtime : details.episode_run_time?.[0];

    const mediaName = "title" in details ? details.title : details.name;

  return (
    <div className="details-container">
      {/* Imagem de fundo (Banner) */}

      <div className="backdrop">
        {/* <Banner runtime={runtimeValue} image={details.backdrop_path}/> */}
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          alt="Banner"
        /> */}

        <Banner image={details.backdrop_path} runtime={runtimeValue} />
      </div>

      <div id="ChipSection">
        <ChipSection
          adult={details.adult}
          genres={details.genres}
          rating={details.vote_average}
          runtime={runtimeValue}
          origin={details.origin_country}
        />

      </div>

      <div className="content">

        <Synopsis title={mediaName} synopsis={details.overview}  />
       

        <div className="castList">
          <CastList id={id} type={type} />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
