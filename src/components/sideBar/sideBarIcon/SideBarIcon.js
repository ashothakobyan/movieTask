import styles from "./SideBarIcon.module.css";

function SideBarIcon({ name, src, sideBarState }) {
  return (
    <div
      className={`${styles.sideBarIcon} ${sideBarState ? styles.active : ""}`}
    >
      {<img className={styles.img} src={src} alt="/" />}
      <h4> {sideBarState ? name : ""}</h4>
    </div>
  );
}

export default SideBarIcon;
