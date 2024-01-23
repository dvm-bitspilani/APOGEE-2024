import * as styles from "@styles/HUD.module.scss";
import { useEffect } from "react";

export function CrossHairCursor() {
  
  useEffect(() => {
    const crosshair = document.querySelector(`.${styles.crosshair}`);
    function cursorFollow(e) {
      crosshair.style.left = e.clientX + "px";
      crosshair.style.top = e.clientY + "px";
    }
    window.addEventListener("mousemove", cursorFollow);
    return () => {
      window.removeEventListener("mousemove", cursorFollow);
    };
  }, []);

  return (
    <img
      className={`${styles.crosshair} ${styles.landingElements}`}
      src="/images/crosshair.png"
      alt="crosshair"
      draggable={false}
    />
  );
}
