import MovieInfoButtons from "../movieInfoButtons/MovieInfoButtons";
import styles from "./MovieInfo.module.css";

function MovieInfo({ movieInfo }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.movie}>{movieInfo.Category}</h2>
      <img alt="/" className={styles.img} src={movieInfo.TitleImage} />
      <div className={styles.movieInfo}>
        <h3>{movieInfo.ReleaseYear}</h3>
        <h3>{movieInfo.MpaRating}</h3>
        <h3>1h 48m</h3>
      </div>
      <h3 className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </h3>
      <MovieInfoButtons />
    </div>
  );
}

export default MovieInfo;
