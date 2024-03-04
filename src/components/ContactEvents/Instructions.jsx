import * as styles from "@styles/Instructions.module.scss";

// State Management
import state from "../state";
import { useSnapshot } from "valtio";
import { useRef } from "react";

export default function Instructions() {
  const snap = useSnapshot(state);

  const wrapperRef = useRef(null);

  function handleButton() {
    wrapperRef.current.style.display = "none";
  }

  return (
    <>
      {snap.isMobile ? (
        <h1 className={styles.mobileSwipe}>{"<< Swipe >>"}</h1>
      ) : (
        <main className={styles.desktopWrapper} ref={wrapperRef}>
          <div className={styles.boxContainer}>
            <div>
              <h2>WELCOME ABOARD!</h2>
              <p>
                Scroll to start the visit, click on any Category to see events
              </p>
            </div>
            <button onClick={handleButton}>OK THANKS</button>
          </div>
        </main>
      )}
    </>
  );
}
