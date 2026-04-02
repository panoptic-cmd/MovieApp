import styles from "./Banner.module.css";

interface IBannerProps {
  image: string | undefined;
  runtime: number | undefined;
}

function Banner({ image, runtime }: IBannerProps) {
  return (
    <div className="banner-wrapper">
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="Banner" />
      <span className="runtime-tag">{runtime} min</span>)
    </div>
  );
}

export default Banner;
