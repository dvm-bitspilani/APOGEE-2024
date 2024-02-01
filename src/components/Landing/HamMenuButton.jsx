import React, { useEffect } from "react";
import state from "../state";

import * as styles from "@styles/HUD.module.scss";

export function HamMenuButton() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleClick = () => {
    state.isHamOpen = !state.isHamOpen;

    const target = document.querySelector("#ham-menu-button span");
    console.log(target);
    let iteration = 0;

    const finalWord = state.isHamOpen ? "Home" : "Menu";

    clearInterval(target.interval);

    target.interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return finalWord[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= finalWord.length) {
        clearInterval(target.interval);
      }

      iteration += 1 / 3;
    }, 50);
  };

  return (
    <button
      id="ham-menu-button"
      className={styles.hamMenuButton}
      onClick={handleClick}
    >
      {/* <HamIcon /> */}
      <span>Menu</span>
    </button>
  );
}
