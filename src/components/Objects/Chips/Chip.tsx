import styles from "./Chip.module.css";


interface IChip {
  variant: "primary" | "secondary";
  id?: string;
  label: React.ReactNode;
}

function Chip({ variant, id, label }: IChip) {
  return (
    <div id={id} className={`${styles.chip} ${styles[variant]}`}>
      
      <span>{label}</span>
    </div>
  );
}

export default Chip;
