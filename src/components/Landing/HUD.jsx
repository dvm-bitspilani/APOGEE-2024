import * as styles from "@styles/HUD.module.scss";

import NavigateSection from "./NavigateSection";
import Countdown from "./Countdown";

import state from "@components/state";
import RegEventsSection from "./RegEventsSection";
import { HamIcon } from "./HamIcon";
import ConstellationDetected from "@components/HamMenu/ConstellationDetected";
import Socials from "@components/HamMenu/Socials";
import MadeWithLuv from "@components/HamMenu/MadeWithLuv";
import Constellation from "../HamMenu/Constelation";

export function Hud() {

  return (
    <>
      <img
        draggable={false}
        className={styles.lefthelm}
        src="/images/Left helm.png"
        alt="left helm"
        style={{position: 'fixed'}}
      />
      <img
        draggable={false}
        className={styles.righthelm}
        src="/images/Right helm.png"
        alt="right helm"
        style={{position: 'fixed'}}
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
        <ConstellationDetected />
        <Socials />
        <MadeWithLuv />
        <Constellation />
      </div>
    </>
  );
}


