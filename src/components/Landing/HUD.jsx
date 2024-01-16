import * as styles from "@styles/HUD.module.scss";
import * as ham from "@styles/Ham.module.scss";

import NavigateSection from "./NavigateSection";
import Countdown from "./Countdown";
import { useSnapshot } from "valtio";

import state from "@components/state";
import { useControls } from "leva";
import RegEventsSection from "./RegEventsSection";
import { useFrame, useThree } from "@react-three/fiber";

export function Hud() {
  const snap = useSnapshot(state);

  return (
    <>
      <img
        draggable={false}
        className={styles.lefthelm}
        src="/images/Left helm.png"
        alt="left helm"
      />
      <img
        draggable={false}
        className={styles.righthelm}
        src="/images/Right helm.png"
        alt="right helm"
      />
      <div id="landing-hud-overlay" className={styles.wrapper}>
        <img
          draggable={false}
          className={styles.tophud}
          src="/images/Top HUD.svg"
          alt="top hud"
        />
        <Countdown />
        <img
          className={styles.crosshair}
          src="/images/crosshair.png"
          alt="crosshair"
          draggable={false}
        />
        <button
        id="ham-menu-button"
          className={styles.hamMenuButton}
          onClick={() => (state.isHamOpen = !state.isHamOpen)}
        >
          <HamIcon />
          <span>Menu</span>
        </button>
        <NavigateSection />
        <RegEventsSection />
      </div>
    </>
  );
}

export function HamIcon() {
  const snap = useSnapshot(state);

  const l1 = document.querySelector(`.${ham.hamIconLine1}`);
  const l2 = document.querySelector(`.${ham.hamIconLine2}`);
  const l3 = document.querySelector(`.${ham.hamIconLine3}`);

  if (snap.isHamOpen) {
    l1?.classList.add(ham.active);
    l2?.classList.add(ham.active);
    l3?.classList.add(ham.active);
  } else {
    l1?.classList.remove(ham.active);
    l2?.classList.remove(ham.active);
    l3?.classList.remove(ham.active);
  }

  return (
    <div className={ham.hamIcon}>
      <div className={ham.hamIconLine1}></div>
      <div className={ham.hamIconLine2}></div>
      <div className={ham.hamIconLine3}></div>
    </div>
  );
}
