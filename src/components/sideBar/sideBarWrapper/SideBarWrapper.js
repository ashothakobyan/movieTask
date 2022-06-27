import { useState } from "react";
import { sideBarIconsData } from "../../../data/sideBarIconsData";
import SideBarIcon from "../sideBarIcon/SideBarIcon";
import styles from "./SideBarWrapper.module.css";
import Face from "../../../assets/face.png";
import SideBarFooter from "../sideBarFooter/SideBarFooter";

function SideBarWrapper() {
  const [sideBarState, setSideBarState] = useState("");
  return (
    <div
      onMouseEnter={() => setSideBarState("active")}
      onMouseLeave={() => setSideBarState("")}
      className={`${styles.sideBarWrapper} ${sideBarState && styles.active}`}
    >
      <div className={styles.header}>
        <div
          className={`${styles.headerWrapper} ${
            sideBarState ? styles.activeHeader : ""
          }`}
        >
          <img alt="/" className={styles.img} src={Face} />
          Daniel
        </div>
      </div>
      <div
        className={`${styles.content} ${sideBarState && styles.activeContent} `}
      >
        {sideBarIconsData.map((el, index) => (
          <SideBarIcon
            sideBarState={sideBarState}
            key={index}
            name={el.name}
            src={el.url}
          />
        ))}
      </div>
      <div className={styles.footer}>{sideBarState && <SideBarFooter />}</div>
    </div>
  );
}

export default SideBarWrapper;
