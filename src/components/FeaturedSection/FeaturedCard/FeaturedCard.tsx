import styles from "./FeaturedCard.module.css";
import PlayButton from "../../../assets/playButton/PlayButton";

interface IFeaturedCard {
  title: string;
  genres: { id: number; name: string }[];
  rating: number;
  language: string;
  date: string;
  runtime: number;
  coverImage: string;
}

function FeaturedCard({
  title,
  genres,
  rating,
  language,
  date,
  runtime,
  coverImage,
}: IFeaturedCard) {
  return (
    <div className={styles.bannerWrapper}>
      <img src={`https://image.tmdb.org/t/p/w500/${coverImage}`} alt="Banner" />
      <PlayButton />

      <h1>{title}</h1>

      <div className={styles.genre}>
        {genres.slice(0, 3).map((genres) => (
          <div>
            <span>{genres.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.language}>
        <span>{language}</span>
      </div>

      {runtime && runtime > 0 && (
        <span className={styles.runtimeTag}>{runtime} min</span>
      )}

      <div className={styles.date}>
        <span>{date}</span>
      </div>

      <div className={styles.rating}>
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default FeaturedCard;
