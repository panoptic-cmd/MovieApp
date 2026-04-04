import styles from "./Pagination.module.css";

interface Props {
  total: number;
  activeIndex: number;
}

const Pagination = ({ total, activeIndex }: Props) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`} 
        />
      ))}
    </div>
  );
};

export default Pagination;