import React from "react";
import * as styles from "../../styles/SpeakerHUD.module.scss";
import { HamMenuButton } from "../Landing/HamMenuButton";
import { Link } from "react-router-dom";

const SpeakerHUD = () => {
  return (
    <>
      <div className={styles.overlay}>
        <img
          draggable={false}
          className={styles.tophud}
          src="/images/Top HUD-v1.png"
          alt="top hud"
        />
        <h1 className={styles.title}>SPEAKERS</h1>
        <Link to="/">
          <button className={styles.hamMenuButton}>
            <span>HOME</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SpeakerHUD;
