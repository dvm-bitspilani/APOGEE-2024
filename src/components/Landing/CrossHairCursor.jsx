import * as styles from "@styles/HUD.module.scss";
import { useEffect } from "react";

export function CrossHairCursor() {
  useEffect(() => {
    const crosshair = document.querySelector(`.${styles.crosshair}`);
    function cursorFollow(e) {
      crosshair.style.left = e.clientX + "px";
      crosshair.style.top = e.clientY + "px";
    }
    window.addEventListener("mousemove", cursorFollow);
    return () => {
      window.removeEventListener("mousemove", cursorFollow);
    };
  }, []);

  return (
    <svg
      className={`${styles.crosshair} ${styles.landingElements}`}
      width="281"
      height="183"
      viewBox="0 0 281 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_d_1343_2760)">
        <path
          d="M116.357 86.9799L134.99 68.3467M145.86 68.3467L165.269 86.9799M165.269 96.2965L145.86 115.706M134.99 115.706L116.357 96.2965"
          stroke="#80ECFF"
          strokeWidth="3.10553"
        />
      </g>
      <g opacity="0.8" filter="url(#filter1_d_1343_2760)">
        <path
          d="M107.041 91.6382H119.463M161.387 91.6382H173.033M140.425 69.8995V59.0301M140.425 112.601V123.47"
          stroke="#80ECFF"
          strokeWidth="2.32915"
        />
      </g>
      <path
        opacity="0.5"
        d="M140.426 40.3973V0.0253906M140.426 141.327V182.475M191.667 90.8622H280.175M87.6317 90.8622H0.676758"
        stroke="#59DAF0"
        strokeWidth="2.32915"
      />
      <defs>
        <filter
          id="filter0_d_1343_2760"
          x="95.517"
          y="47.5064"
          width="90.5704"
          height="89.0177"
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
          <feGaussianBlur stdDeviation="9.86006" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.160784 0 0 0 0 1 0 0 0 0 0.905882 0 0 0 0.34 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1343_2760"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1343_2760"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1343_2760"
          x="82.5406"
          y="34.5301"
          width="114.993"
          height="113.44"
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
          <feGaussianBlur stdDeviation="12.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.160784 0 0 0 0 1 0 0 0 0 0.905882 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1343_2760"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1343_2760"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
