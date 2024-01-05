import React from "react";

import * as styles from "@styles/HUD.module.scss";

export default function NavigateSection() {
  return (
    <div className={styles.navigatorWrapper}>
      <img src="/images/spaceship-landing.png" alt="spaceship" />
      <div className={styles.navigator}>
        <Line />
        <h1>SECTIONS</h1>
        <Line />
        <div className={styles.navigatorLinks}>
          <button>1 | HOME</button>
          <button>2 | ABOUT</button>
          <button>3 | EVENTS</button>
          <button>4 | SPEAKERS</button>
          <button>5 | CONTACT</button>
        </div>
      </div>
    </div>
  );
}

export function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="337"
      height="79"
      viewBox="0 0 337 79"
      fill="none"
    >
      <g opacity="0.8" filter="url(#filter0_dd_570_110)">
        <path
          d="M37.2497 39.1387L40 41.889L42.7503 39.1387L40 36.3884L37.2497 39.1387ZM299.75 39.1387L297 36.3884L294.25 39.1387L297 41.889L299.75 39.1387ZM40 39.615L297 39.615V38.6623L40 38.6623V39.615Z"
          fill="#94F2F6"
          fillOpacity="0.72"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_570_110"
          x="0.902916"
          y="0.0415726"
          width="335.194"
          height="78.1942"
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
          <feGaussianBlur stdDeviation="18.1734" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.533646 0 0 0 0 0.768352 0 0 0 0 0.783333 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_570_110"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.9357" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.525087 0 0 0 0 0.958333 0 0 0 0 0.909744 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_570_110"
            result="effect2_dropShadow_570_110"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_570_110"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
