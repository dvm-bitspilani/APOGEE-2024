import React from "react";
import { useNavigate } from "react-router-dom";

import * as styles from "@styles/Controller.module.scss";
import { useSnapshot } from "valtio";
import state from "../state";

export default function Controller({ route, text }) {
  const snap = useSnapshot(state);

  const currentNumPage =
    text === "HOME" ? snap.currentCategory : snap.currentEvent;
  const totalNumPages = text === "HOME" ? snap.numCategories : snap.numEvents;

  const navigate = useNavigate();
  const handleButton = () => {
    navigate(route);
  };
  return (
    <>
      <button className={styles.backBtn} onClick={handleButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
        >
          <g filter="url(#filter0_d_2778_15566)">
            <path
              d="M28.2 19.1998H11.4M11.4 19.1998L19.8 27.5998M11.4 19.1998L19.8 10.7998"
              stroke="#9AF0F4"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <span>{text}</span>
      </button>
      <div className={styles.pageNumber}>
        <span>{`${currentNumPage}/${totalNumPages}`}</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{
              width: `${(currentNumPage / totalNumPages) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
