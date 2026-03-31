import styles from "./Button.module.css";

interface IButton {
  type: "primary" | "secondary";

  props?: string;
  key?: string | number;
}

function Button({ type, props, key }: IButton) {
  return (
    <div key={key} className={styles[type]}>
      <button>
        <span>{props}</span>
      </button>
    </div>
  );
}

export default Button;
