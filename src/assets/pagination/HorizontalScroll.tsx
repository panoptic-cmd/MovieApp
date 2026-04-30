import styles from "./HorizontalScroll.module.css";


interface Props {
  total: number;
  activeIndex: number;
}

const HorizontalScroll = ({ total, activeIndex }: Props) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: total }).map((_, indice) => (
        <div 
          key={indice} 
          className={`${styles.dot} ${indice === activeIndex ? styles.active : ""}`} 
        />
      ))}
    </div>
  );
};

export default HorizontalScroll;