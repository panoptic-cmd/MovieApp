import styles from "./ActorCard.module.css";
import type { CastMember } from "../CastList";

interface ActorCardProps {
  actor: CastMember;
 
}

function ActorCard({ actor }: ActorCardProps) {
  const profileImg = actor.profile_path
    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";

  return (
    <div key={actor.id} className={styles.card}>
      <img src={profileImg} alt={actor.name} />
      <span>{actor.name}</span>
    </div>
  );
}

export default ActorCard;
