import * as styles from "@styles/HUD.module.scss";
import NavigateSection from "./NavigateSection";
import Countdown from "./Countdown";
// import { useSnapshot } from "valtio";

import state from "@components/state";
import { useEffect, useRef } from "react";
import RegEventsSection from "./RegEventsSection";

export function Hud() {
  useEffect(() => {
    const interval = setInterval(() => {
      state.count = state.count + 1;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
        <div className={styles.hamMenuButton}>
          <HamIcon />
          <span>Menu</span>
        </div>
        <NavigateSection />
        <RegEventsSection />
      </div>
    </>
  );
}

export function HamIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="42"
      viewBox="0 0 51 42"
      fill="none"
    >
      <g filter="url(#filter0_d_570_152)">
        <path
          d="M12 20.8889H38.6667M12 12H38.6667M12 29.7778H29.7778"
          stroke="#9AF0F4"
          strokeWidth="2.96332"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_570_152"
          x="0.0541353"
          y="0.0541658"
          width="50.5584"
          height="41.6694"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5.23209" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.941176 0 0 0 0 0.956863 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_570_152"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_570_152"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
