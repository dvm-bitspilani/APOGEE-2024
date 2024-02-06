import { HamMenuButton } from "./HamMenuButton";
import * as styles from "@styles/HUD.module.scss";

import NavigateSection from "./NavigateSection";

import state from "@components/state";
import RegEventsSection from "./RegEventsSection";
import ConstellationDetected from "@components/HamMenu/ConstellationDetected";
import Socials from "@components/HamMenu/Socials";
import MadeWithLuv from "@components/HamMenu/MadeWithLuv";
import Constellation from "../HamMenu/Constelation";

import { Link } from "react-router-dom";
import { Register_bg_svg } from "./RegEventsSection";

import apogee from "@assets/landing/apogee_logo.png";
import Countdown from "./Countdown";
import { CrossHairCursor } from "./CrossHairCursor";
// import ContactHUD from "../Contact/ContactHUD";

// import TopHUD from "./TopHUD";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

export function Hud() {

  return (
    <>
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
      <div id="landing-hud-overlay" className={styles.wrapper}>
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
        <CrossHairCursor />
        <HamMenuButton />
        <NavigateSection />
        <RegEventsSection />
        {/* <ContactHUD/> */}
        <ConstellationDetected />
        <Socials />
        <MadeWithLuv />
        <Constellation />
        <MobileHUD />
      </div>
    </>
  );
}

export function MobileHUD() {
  const buttonData = ["HOME", "ABOUT", "EVENTS", "SPEAKERS", "CONTACT"];

  // To rerender the component when the state changes
  useSnapshot(state);

  const navigate = useNavigate();

  const handleClick = (value, index) => {
    console.log(index);
    if (index === 2 || index === 3) {
      navigate(`/${value.toLowerCase()}`);
    } else {
      state.targetSection = index;
    }
  };

  return (
    <>
      <div className={`${styles.mobileLinks} ${styles.landingElements}`}>
        {buttonData.map((value, index) => (
          <button
            key={index}
            className={state.activeSection === index ? styles.active : ""}
            onClick={() => handleClick(value, index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className={`${styles.mobileBottom} ${styles.landingElements}`}>
        <Countdown mobile={true} />
        <Link to="/register">
          <Register_bg_svg />
          <span>REGISTER</span>
        </Link>
        <Socials navigate={true} />
      </div>
    </>
  );
}
