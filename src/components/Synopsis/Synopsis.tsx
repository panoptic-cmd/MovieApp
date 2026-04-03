import styles from "./Synopsis.module.css";
import { useState } from "react";

interface ISynopsis {
  title: string;
  synopsis: string;
}

const Synopsis = ({ title, synopsis }: ISynopsis) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const textLimit = 100;
  const isLongText = synopsis?.length > textLimit;

  // Texto que será exibido
  const displayText = isExpanded || !isLongText 
    ? synopsis 
    : `${synopsis.substring(0, textLimit)}...`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      
      <div className={styles.synopsisWrapper}>
        <p className={styles.synopsisText}>
          {displayText}
          {isLongText && (
            <button 
              className={styles.showMoreBtn} 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Show less" : " Show more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Synopsis;
