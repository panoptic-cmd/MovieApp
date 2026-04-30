import styles from "./UserCard.module.css";

function UserCard() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarWrapper}>
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="Avatar"
          className={styles.avatar}
        />
        {/* O ponto verde online */}
        <span className={styles.statusDot}></span>
      </div>

      <div className={styles.info}>
        <span className={styles.welcome}>Welcome Back</span>
        <span className={styles.name}>User Name</span>
      </div>
    </div>
  );
}

export default UserCard;
