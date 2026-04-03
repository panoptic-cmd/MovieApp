import styles from "./Banner.module.css";
import PlayButton from "../../assets/playButton/PlayButton";

interface IBannerProps {
  image: string | undefined;
  runtime?: number | undefined;
}

function Banner({ image, runtime }: IBannerProps) {
  return (
    <div className={styles.bannerWrapper}>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="Banner" />
      <PlayButton />
      {runtime && runtime > 0 && (
        <span className={styles.runtimeTag}>{runtime} min</span>
      )}
    </div>
  );
}

export default Banner;
