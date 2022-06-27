import styles from "./MovieInfoButtons.module.css";
import PlayICon from "../../../assets/playIcon.png";
function MovieInfoButtons() {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.play} ${styles.button}`}>
        <img className={styles.playIcon} alt="/" src={PlayICon} />
        <h3>Play</h3>
      </button>
      <button className={`${styles.moreInfo} ${styles.button}`}>
        <h3>More info</h3>
      </button>
    </div>
  );
}

export default MovieInfoButtons;
