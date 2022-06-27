import styles from "./Main.module.css";
import { moviesData } from "../../data/moviesData";
import SideBarWrapper from "../sideBar/sideBarWrapper/SideBarWrapper";
import MovieInfo from "../movieInfoWrapper/movieInfo/MovieInfo";
import { useEffect, useRef, useState } from "react";
import SliderWrapper from "../slider/sliderWrapper/SliderWrapper";
function Main() {
  const [featuredMovie, setFeaturedMovie] = useState(moviesData.Featured);
  const img = useRef(featuredMovie);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setVideo(featuredMovie.VideoUrl);
    }, 2000);
  }, [featuredMovie]);
  return (
    <div ref={img} className={styles.main}>
      {video ? (
        <video
          onEnded={() => setVideo("")}
          autoPlay={true}
          className={styles.video}
          src={featuredMovie.VideoUrl}
        />
      ) : (
        <img
          className={styles.featuredCoverImage}
          src={featuredMovie.CoverImage}
          alt="/"
        />
      )}
      <SideBarWrapper />
      <MovieInfo movieInfo={featuredMovie} />
      <SliderWrapper setFeaturedMovie={setFeaturedMovie} />
    </div>
  );
}

export default Main;
