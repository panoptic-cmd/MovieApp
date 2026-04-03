import styles from "./HeartButton.module.css";
import {useState} from 'react';



interface IHeartButtonProps{

size?: number;
initialFavorite?: boolean;

}


const HeartButton = ({size=16, initialFavorite=false}:IHeartButtonProps) => {

    const [isFavorite, setFavorite] = useState(initialFavorite);

    const selectFavorite = () => {
        setFavorite(!isFavorite);

    };
  return (

    <button
    className={styles.button}
    onClick={selectFavorite}
    
    >
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill= {isFavorite ? "#ff4b4b" : "none"}
      stroke={isFavorite ? "#ff4b4b" : "#ffffff"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart-icon lucide-heart"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
</button>

  )
}

export default HeartButton;
