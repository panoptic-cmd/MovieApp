import styles from "./Chip.module.css";
import type { ReactNode } from "react";

interface IChip {
  variant: "primary" | "secondary";
  id: string;
  label: string;
  children: ReactNode;
}

function Chip({ variant, id, label, children }: IChip) {
  return (
    <div id={id} className={styles[variant]}>
      {children}
      <span>{label}</span>
    </div>
  );
}

export default Chip;
