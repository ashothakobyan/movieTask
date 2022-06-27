import { useRef, useState } from "react";
import Slide from "../slide/Slide";
import styles from "./SliderWrapper.module.css";
import { moviesData } from "../../../data/moviesData";

function SliderWrapper({ setFeaturedMovie }) {
  const slider = useRef(null);
  const [position, setPosition] = useState(0);

  const prevHandler = () => {
    if (position === 0) {
    } else {
      setPosition(position + 300);

      slider.current.childNodes.forEach((element) => {
        element.style = `transform:translateX(${position}px)`;
      });
    }
  };
  const nextHandler = () => {
    if (position <= -(moviesData.TendingNow.length - 8) * 180) {
    } else {
      const newPosition = position - 300;

      slider.current.childNodes.forEach((element) => {
        element.style = `transform:translateX(${newPosition}px)`;
      });
      setPosition(newPosition);
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={() => prevHandler()}
      >
        {"<"}
      </button>
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={() => nextHandler()}
      >
        {">"}
      </button>
      <h3 className={styles.title}> Trending now</h3>
      <div className={styles.tracker} ref={slider}>
        {moviesData.TendingNow.map((el, index) => (
          <Slide setFeaturedMovie={setFeaturedMovie} info={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SliderWrapper;
