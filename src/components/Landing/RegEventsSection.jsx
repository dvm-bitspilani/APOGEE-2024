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
    aic,
    armageddon,
    sms,
    oht,
    quantuculus,
    robowars,
    drone,
    icl,
    bitmun,
    finance,
    paper,
    projects,
  ];

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
        <EventsCarousel index={index} setIndex={setIndex} images={images} />
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
    slice: {
      count: 6,
    },
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
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="103"
      fill="none"
      viewBox="0 0 256 103"
      className={styles.register_bg_svg}
    >
      <g opacity="0.8">
        <g filter="url(#filter0_d_1880_3147)" opacity="0.5">
          <path
            fill="#3E6567"
            d="M247.365 94.992H8.614V12.229H160.242L167.782 8h68.693l10.89 4.229V94.99z"
          ></path>
        </g>
        <path
          stroke="#9AF0F4"
          strokeWidth="0.8"
          d="M247.365 12.229h-72.044m72.044 0L236.475 8h-68.693l-7.54 4.229m87.123 0V88.95M8.615 21.895v-9.666h93.824M8.614 21.895h74.557l19.268-9.666M8.614 21.895V88.95m93.825-76.722h30.158m0 0l5.026 4.833h30.159l7.539-4.833m-42.724 0h27.645m15.079 0h-15.079m87.123 76.722v6.04H8.615v-6.04m238.75 0h-80.421l-9.215 6.04h-56.965l-3.351-3.624H44.636l-3.35-2.416H8.613"
        ></path>
        <path
          fill="#9AF0F4"
          stroke="#9AF0F4"
          strokeWidth="0.8"
          d="M40.937 89.223H8.614v5.769h91.46l-2.661-3.02h-53.17l-3.306-2.749zM166.558 89.223l-7.714 5.769h87.787v-5.769h-80.073zM173.902 12.833h-39.63l3.634 3.625h29.875l6.121-3.625zM167.78 8.604l-5.026 3.021h82.406l-8.815-3.02H167.78z"
        ></path>
        <path
          fill="#9AF0F4"
          d="M244.853 82.91v4.229H222.234l5.864-4.229h16.755z"
        ></path>
        <path
          stroke="#9AF0F4"
          strokeWidth="0.8"
          d="M223.91 87.139h4.188m0 0h16.755V82.91h-16.755l-5.864 4.229h5.864z"
        ></path>
        <path
          fill="#9AF0F4"
          stroke="#9AF0F4"
          strokeWidth="0.8"
          d="M218.884 87.139l5.864-4.229h-2.514l-5.864 4.229h2.514zM213.02 87.139l5.864-4.229h-2.513l-5.865 4.229h2.514zM207.154 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM201.29 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM195.426 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM189.562 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM183.698 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM177.834 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513zM171.97 87.139l5.864-4.229h-2.513l-5.864 4.229h2.513z"
        ></path>
        <path
          fill="#9AF0F4"
          d="M11.964 14.645H15.315000000000001V19.478H11.964z"
        ></path>
        <path fill="#9AF0F4" d="M16.991 14.645H20.342V19.478H16.991z"></path>
        <path
          fill="#9AF0F4"
          d="M22.019 14.645H25.369999999999997V19.478H22.019z"
        ></path>
        <path fill="#9AF0F4" d="M27.045 14.645H30.396V19.478H27.045z"></path>
        <path fill="#9AF0F4" d="M32.07 14.645H35.421V19.478H32.07z"></path>
        <path fill="#9AF0F4" d="M37.097 14.645H40.448V19.478H37.097z"></path>
        <path fill="#9AF0F4" d="M42.123 14.645H45.474V19.478H42.123z"></path>
        <path fill="#9AF0F4" d="M47.15 14.645H50.501V19.478H47.15z"></path>
        <path fill="#9AF0F4" d="M52.176 14.645H55.527V19.478H52.176z"></path>
        <path fill="#9AF0F4" d="M57.202 14.645H60.553V19.478H57.202z"></path>
        <path fill="#9AF0F4" d="M62.227 14.645H65.578V19.478H62.227z"></path>
        <path fill="#9AF0F4" d="M67.254 14.645H70.605V19.478H67.254z"></path>
        <path fill="#9AF0F4" d="M72.282 14.645H75.633V19.478H72.282z"></path>
        <path fill="#9AF0F4" d="M77.307 14.645H80.658V19.478H77.307z"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1880_3147"
          width="254.751"
          height="102.992"
          x="0.614"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.603922 0 0 0 0 0.941176 0 0 0 0 0.956863 0 0 0 0.7 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1880_3147"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1880_3147"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter0_d_570_154"
          width="254.751"
          height="102.992"
          x="0.614"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feColorMatrix
            // type="matrix"
            values="0 0 0 0 0.96 0 0 0 0 0.63 0 0 0 0 0.63 0 0 0 0.7 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1880_3147"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1880_3147"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
