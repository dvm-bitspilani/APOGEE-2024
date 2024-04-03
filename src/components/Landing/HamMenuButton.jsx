import React, { useEffect } from "react";
import state from "../state";

import * as styles from "@styles/HUD.module.scss";
import { useSnapshot } from "valtio";
import { handleAnimation } from "./handleAnimation";

export function HamMenuButton() {
  const snap = useSnapshot(state);

  const handleClick = () => {
    if (state.targetSection === 0 && state.activeSection === 0) {
      state.isHamOpen = !state.isHamOpen;
    }
    handleAnimation(state);
  };

  return (
    <button
      id="ham-menu-button"
      className={styles.hamMenuButton}
      onClick={handleClick}
      style={
        snap.targetSection === 1 || snap.targetSection === 4
          ? { transform: "translateY(-55%) translateX(-50%)" }
          : { transform: "translateY(0) translateX(-50%)" }
      }
    >
      {/* <HamIcon /> */}
      <span>Menu</span>
    </button>
  );
}
