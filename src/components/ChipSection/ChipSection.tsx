import Chip from "../Objects/Chips/Chip";
import styles from "./ChipSection.module.css";
import Star from "../../assets/star/Star";
import HeartButton from "../../assets/heartButton/HeartButton";

interface ChipSectionProps {
  adult: boolean;
  genres: { id: number; name: string }[];
  rating: number;
  runtime?: number;
  origin?: string[];
}

function ChipSection({ adult, genres, rating, origin }: ChipSectionProps) {
  return (
    <div className={styles.container}>
      {adult && <Chip id={"adult"} variant={"primary"} label={"+18"} />}

      {genres?.slice(0, 3).map((genre) => (
        <Chip
          key={genre.id}
          id={`${genre.id}`}
          variant={"primary"}
          label={genre.name}
        />
      ))}

      <Chip
        id={"rating"}
        variant={"secondary"}
        label={
          <>
            {  rating.toFixed(1)} <Star  size={16}  />
          </>
        }
      />

      {origin?.map((origin) => (
        <Chip id={"origin"} variant={"secondary"} label={origin} />
      ))}

<HeartButton size={24} initialFavorite={false}/>
    </div>
  );
}

export default ChipSection;
