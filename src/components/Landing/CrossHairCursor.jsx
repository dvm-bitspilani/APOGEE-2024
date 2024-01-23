import * as styles from "@styles/HUD.module.scss";
import { useEffect } from "react";

export function CrossHairCursor() {
  
  useEffect(() => {
    const crosshair = document.querySelector(`.${styles.crosshair}`);
    window?.addEventListener("mousemove", (e) => {
      crosshair.style.left = e.clientX + "px";
      crosshair.style.top = e.clientY + "px";
    });
  }, []);

  return <img
    className={`${styles.crosshair} ${styles.landingElements}`}
    src="/images/crosshair.png"
    alt="crosshair"
    draggable={false} />;
}
