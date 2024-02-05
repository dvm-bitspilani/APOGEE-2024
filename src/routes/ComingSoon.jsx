import { motion } from "framer-motion";

import * as styles from "@styles/HUD.module.scss";
import * as registerStyles from "@styles/Register.module.scss";
import apogee from "@assets/landing/apogee_logo.png";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <img
        draggable={false}
        className={styles.lefthelm}
        src="/images/Left helm.png"
        alt="left helm"
        style={{ position: "fixed" }}
      />
      <img
        draggable={false}
        className={styles.righthelm}
        src="/images/Right helm.png"
        alt="right helm"
        style={{ position: "fixed" }}
      />
      <img
        draggable={false}
        className={styles.tophud}
        src="/images/Top HUD-v1.png"
        alt="top hud"
      />
      {/* <TopHUD /> */}
      <img
        src={apogee}
        alt="apogee"
        draggable={false}
        className={styles.logo}
      />
      <button
        id="ham-menu-button"
        className={styles.hamMenuButton}
        onClick={handleClick}
      >
        <span>HOME</span>
      </button>
      <span
        className={registerStyles.successText}
        style={{
          bottom: "50%",
          transform: "translate(50% 50%)",
          fontSize: "3rem",
          textShadow: "0px 0px 18.12px rgba(154, 240, 244, 0.7)",
        }}
      >
        COMING SOON
      </span>
    </motion.div>
  );
}
