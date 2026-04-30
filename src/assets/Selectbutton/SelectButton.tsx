import styles from "./SelectButton.module.css";


interface ISelectButton {
  children: string;
  onClick?: () => void;
  isActive?: boolean;
}

function SelectButton({ children, onClick, isActive }: ISelectButton) {
  return (
    <div className={styles.buttonWrapper}>
      <button
        onClick={onClick}
        className={`${styles.button} ${isActive ? styles.active : ""} `}
      >
        {children}
      </button>
    </div>
  );
}

export default SelectButton;
