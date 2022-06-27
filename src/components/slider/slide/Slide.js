import styles from "./Slide.module.css";
function Slide({ info, setFeaturedMovie }) {
  return (
    <div className={styles.slide}>
      <img
        onClick={() => setFeaturedMovie(info)}
        className={styles.img}
        alt="/"
        src={info.CoverImage}
      />
    </div>
  );
}

export default Slide;
