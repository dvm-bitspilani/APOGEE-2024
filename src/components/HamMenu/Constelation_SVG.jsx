import React, { useEffect, useRef } from "react";

import Vivus from "vivus";

import state from "../state";
import { useSnapshot } from "valtio";

export function Constelation_SVG() {
  const vivus = useRef(null);
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.isHamOpen) {
      setTimeout(() => {
        vivus.current?.play();
      }, 2500);
    } else {
      setTimeout(() => {
        vivus.current?.reset();
      }, 1000);
    }
  }, [snap.isHamOpen]);

  useEffect(() => {
    vivus.current = new Vivus("constelation-svg", {
      type: "delayed",
      duration: 250,
      start: "manual",
      pathTimingFunction: Vivus.EASE_IN,
      animTimingFunction: Vivus.EASE_OUT,
    });
  }, []);

  return (
    <svg
      id="constelation-svg"
      width="675"
      height="549"
      viewBox="0 0 675 549"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83 91 L21 340"
        stroke="url(#paint5_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M18.5005 341.5 L277 546"
        stroke="url(#paint4_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M277 546 L330 290.5"
        stroke="url(#paint3_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M329.5 290 L261.5 3.00005"
        stroke="url(#paint2_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M265.5 4 L565 114"
        stroke="url(#paint0_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M564.815 115 L617.5 392.5"
        stroke="url(#paint1_linear_1077_121)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1077_121"
          x1="224.016"
          y1="49.3641"
          x2="579.132"
          y2="111.679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1077_121"
          x1="537.678"
          y1="153.813"
          x2="645.614"
          y2="396.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1077_121"
          x1="234.361"
          y1="41.8141"
          x2="342.297"
          y2="284.081"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1077_121"
          x1="274.497"
          y1="558.376"
          x2="335.146"
          y2="265.366"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1077_121"
          x1="-105.693"
          y1="335.299"
          x2="274.231"
          y2="387.522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1077_121"
          x1="85.6385"
          y1="79.5341"
          x2="21.255"
          y2="350.804"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB3B8" />
          <stop offset="1" stopColor="#4AB3B8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
