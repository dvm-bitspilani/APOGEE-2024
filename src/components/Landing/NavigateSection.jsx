import { useEffect, useState } from "react";
import * as styles from "@styles/HUD.module.scss";

import Countdown from "./Countdown";
import Socials from "@components/HamMenu/Socials";

import state from "../state";

import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Button = ({
  value,
  handleMouseOver,
  handleMouseOut,
  isActive,
  index,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    state.targetSection = index;

    console.log(index);
    if (index === 1 || index === 2 || index === 3) {
      navigate(`/${value.toLowerCase()}`);
    }
  };

  return (
    <button
      className={isActive ? styles.buttonActive : null}
      id={`active-section-${index}`}
      data-value={value}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default function NavigateSection() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const snap = useSnapshot(state);

  const handleMouseOver = (event) => {
    const { target } = event;
    let iteration = 0;

    clearInterval(target.interval);

    target.interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(target.interval);
      }

      iteration += 1 / 3;
    }, 30);

    setHoveredButton(target);
  };

  const handleMouseOut = () => {
    if (hoveredButton) {
      clearInterval(hoveredButton.interval);
      hoveredButton.innerText = hoveredButton.dataset.value;
      setHoveredButton(null);
    }
  };

  const buttonData = ["HOME", "ABOUT", "EVENTS", "SPEAKERS", "CONTACT"];

  return (
    <div className={`${styles.navigatorWrapper} ${styles.landingElements}`}>
      <Countdown />
      <div className={styles.navigator}>
        <Line />
        <h1>SECTIONS</h1>
        <Line />
        <div className={styles.navigatorLinks}>
          {buttonData.map((value, index) => (
            <Button
              key={index}
              value={value}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
              isActive={state.activeSection === index}
              index={index}
            />
          ))}
        </div>
        <Line />
        <Socials navigate={true} />
      </div>
    </div>
  );
}

export function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="337"
      height="40"
      viewBox="0 0 337 40"
      fill="none"
    >
      <g opacity="0.8" filter="url(#filter0_dd_570_110)">
        <path
          d="M37.2497 39.1387L40 41.889L42.7503 39.1387L40 36.3884L37.2497 39.1387ZM299.75 39.1387L297 36.3884L294.25 39.1387L297 41.889L299.75 39.1387ZM40 39.615L297 39.615V38.6623L40 38.6623V39.615Z"
          fill="#94F2F6"
          fillOpacity="0.72"
          transform="translate(0, -20)"
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
