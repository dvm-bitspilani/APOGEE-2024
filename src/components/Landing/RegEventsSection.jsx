import { useEffect, useState } from "react";
import * as styles from "@styles/HUD.module.scss";
import { Link } from "react-router-dom";

import placeholder from "@assets/events/placeholder.png";
import eventsSep from "@assets/landing/events_landing_sep.svg";
import carouselWindow from "@assets/landing/CarouselWindow.svg";

import { Line } from "./NavigateSection";

import { useGlitch } from "react-powerglitch";

import kernel_events from "@assets/events/kernel_events";

import robowars from "@assets/events/robowars.jpg";
import drone from "@assets/events/drone.jpg";

export default function RegEventsSection() {

  const aic = "aic.jpg";
  const armageddon = "armageddon.jpg";
  const sms = "sms.jpg";
  const oht = "oht.jpg";
  const quantuculus = "quantuculus.jpg";
  const icl = "icl.jpg";
  const bitmun = "bitmun.jpg";
  const finance = "finance.jpg";
  const paper = "paper.jpg";
  const projects = "projects.jpg";

  const images = [
    aic, armageddon, sms, oht, quantuculus, robowars, drone, icl, bitmun, finance, paper, projects]

  const [index, setIndex] = useState(0);
  return (
    <div className={`${styles.regEventsWrapper} ${styles.landingElements}`}>
      <Link to="/register" draggable={false}>
        <Register_bg_svg />
        <span>REGISTER</span>
      </Link>
      <h1>EVENTS FOR YOU</h1>
      <Line />
      <div className={styles.eventsWrapper}>
        <EventsCarousel index={index} setIndex={setIndex} images={images}/>
      </div>
      <Line />
    </div>
  );
}

export function EventsCarousel({ index, setIndex, images }) {
  const { ref, startGlitch, stopGlitch } = useGlitch({
    playMode: "manual",
    hideOverflow: true,
    glitchMode: "scanline",
    shake: false,
  });

  function glitchEffect() {
    startGlitch();
    setTimeout(() => {
      stopGlitch();
    }, 1000);
  }

  function carouselPrev() {
    glitchEffect();
    setIndex((index - 1 + kernel_events.length) % kernel_events.length);
  }

  function carouselNext() {
    glitchEffect();
    setIndex((index + 1) % kernel_events.length);
  }

  return (
    <>
      <div className={styles.eventsCarousel}>
        <div className={styles.leftArrow} onClick={carouselPrev}></div>
        <div className={styles.carouselWindow}>
          <img
            ref={ref}
            src={images[index]}
            alt={placeholder}
            onError={(e) => (e.target.src = placeholder)}
          />
        </div>
        <div className={styles.rightArrow} onClick={carouselNext}></div>
      </div>
      <img src={eventsSep} alt="separator" />
      <div className={styles.eventsInfo}>
        <h2>{kernel_events[index].name}</h2>
        <p>{kernel_events[index].category}</p>
      </div>
    </>
  );
}

export function Register_bg_svg() {
  return (
    <svg
      width="316"
      height="119"
      viewBox="0 0 316 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.register_bg_svg}
    >
      <g opacity="0.8" filter="url(#filter0_d_570_153)">
        <path
          d="M307 13.9156H217.077M307 13.9156L293.407 9.02063H207.667L198.256 13.9156M307 13.9156V102.724M9 25.104V13.9156H126.109M9 25.104H102.06L126.109 13.9156M9 25.104V102.724M126.109 13.9156H163.751M163.751 13.9156L170.025 19.5098H207.667L217.077 13.9156M163.751 13.9156H198.256M217.077 13.9156H198.256M307 102.724V109.717H9V102.724M307 102.724H206.621L195.119 109.717H124.018L119.835 105.521H53.9614L49.7789 102.724H9"
          stroke="#9AF0F4"
        />
        <path
          d="M49.3446 103.039H9V109.717H123.157L119.835 106.22H53.4708L49.3446 103.039Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M206.139 103.039L196.511 109.717H306.084V103.039H206.139Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M215.306 14.6149H165.841L170.377 18.8105H207.665L215.306 14.6149Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M207.665 9.71985L201.391 13.2162H304.248L293.245 9.71985H207.665Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M303.864 95.7312V100.626H282.952H277.724H275.633L282.952 95.7312H303.864Z"
          fill="#9AF0F4"
        />
        <path
          d="M277.724 100.626H282.952M282.952 100.626H303.864V95.7312H282.952L275.633 100.626H282.952Z"
          stroke="#9AF0F4"
        />
        <path
          d="M271.45 100.626L278.77 95.7312H275.633L268.313 100.626H271.45Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M264.131 100.626L271.45 95.7312H268.314L260.994 100.626H264.131Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M256.81 100.626L264.129 95.7312H260.992L253.673 100.626H256.81Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M249.491 100.626L256.81 95.7312H253.673L246.354 100.626H249.491Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M242.172 100.626L249.491 95.7312H246.354L239.035 100.626H242.172Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M234.852 100.626L242.172 95.7312H239.035L231.716 100.626H234.852Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M227.533 100.626L234.853 95.7312H231.716L224.396 100.626H227.533Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M220.214 100.626L227.533 95.7312H224.396L217.077 100.626H220.214Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <path
          d="M212.895 100.626L220.214 95.7312H217.077L209.758 100.626H212.895Z"
          fill="#9AF0F4"
          stroke="#9AF0F4"
        />
        <rect
          x="13.1813"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="19.4552"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="25.731"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="32.0049"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="38.2767"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="44.5507"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="50.8245"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="57.0984"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="63.3722"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="69.6461"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="75.918"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="82.1919"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="88.4677"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
        <rect
          x="94.7396"
          y="16.7126"
          width="4.18246"
          height="5.59423"
          fill="#9AF0F4"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_570_153"
          x="0.5"
          y="0.52063"
          width="315"
          height="117.696"
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
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.941176 0 0 0 0 0.956863 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_570_153"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_570_153"
            result="shape"
          />
        </filter>
        <filter
          id="filter0_d_570_154"
          x="0.5"
          y="0.52063"
          width="315"
          height="117.696"
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
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.96 0 0 0 0 0.63 0 0 0 0 0.63 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_570_153"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_570_153"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
