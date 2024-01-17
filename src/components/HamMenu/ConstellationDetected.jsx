import * as styles from "@styles/HamMenu.module.scss";

import apogeeLogo from "/images/apogee.png";

export default function ConstellationDetected() {
  return (
    <div className={`${styles.constellationDetected} ${styles.menu}`}>
      <div className={styles.apogeeLogo}>
        <img src={apogeeLogo} alt="apogee logo" />
      </div>
        <div className={styles.textContainer}>
            <h1>Constellation Detected</h1>
            <p>&quot;Apogee&quot;</p>
        </div>
    </div>
  );
}
