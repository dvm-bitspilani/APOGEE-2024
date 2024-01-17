import * as styles from "@styles/HamMenu.module.scss";
import luv from "@assets/hamMenu/luv.png";

export default function ConstellationDetected() {
  return (
    <div className={`${styles.madeLuv} ${styles.menu}`}>
      <span>Made with</span>
      <img src={luv} alt="love" />
      <span>by BITS</span>
    </div>
  );
}
