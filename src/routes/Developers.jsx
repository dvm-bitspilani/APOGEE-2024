import { motion } from "framer-motion";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlitch } from "react-powerglitch";

import * as styles from "../styles/Developers.module.scss";
import DeveloperInfoCard from "../components/Developers/DeveloperInfoCard";
import developers_info from "../assets/developers/developersInfo";

export default function Developers() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);
  const [vertical, setVertical] = useState("frontend");
  const [showDialog, setshowDialog] = useState(false);
  console.log(vertical);

  const glitchIn = useGlitch({
    playMode: "manual",
    hideOverflow: true,
    glitchMode: "scanline",
    slice: {
      count: 6,
    },
  });

  function glitchEffect() {
    glitchIn.startGlitch();
    setTimeout(() => {
      glitchIn.stopGlitch();
    }, 1000);
  }

  useEffect(() => {
    function scrollHandler() {
      const content = contentRef.current;
      const scrollPercentage =
        (content.scrollTop / (content.scrollHeight - content.clientHeight)) *
        68;
      setScrollPosition(scrollPercentage);
    }

    contentRef.current.addEventListener("scroll", scrollHandler);
  }, []);

  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      delay: 2000,
      duration: 3500,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.4,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.01,
      amplitudeY: 0.01,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.01,
      maxHeight: 0.05,
      hueRotate: true,
    },
    pulse: false,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  const handleVerticalCardClick = (vertical) => {
    setshowDialog(!showDialog);
    setVertical(vertical);
    glitchEffect();
  };
  const handleVerticalBackButtonClick = () => {
    setshowDialog(!showDialog);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={styles.pageContainer}
      >
        <img
          draggable={false}
          className={styles.devPageCodes}
          ref={glitch.ref}
          src="/images/DevPage-Codes.png"
          alt="dev page codes"
          style={{ position: "fixed" }}
        />
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
        <img
          draggable={false}
          className={styles.tophud}
          src="/images/devPageTopHUD.png"
          alt="top hud"
        />
        <button
          id="ham-menu-button"
          className={styles.hamMenuButton}
          onClick={handleClick}
        >
          <span>HOME</span>
        </button>

        <div
          className={styles.arcGrid}
          style={showDialog == true ? { opacity: 0 } : {}}
        >
          <div className={styles.firstCol}>
            <div
              onClick={() => {
                handleVerticalCardClick("design");
              }}
            >
              <img
                draggable={false}
                className={styles.folderContent}
                src="/images/designTL.png"
                alt="design"
              />
              <svg
                className={styles.folder}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 402 274"
                fill="none"
              >
                <path
                  d="M400 45.0376L399.601 236.677L366.9 272L16.3567 271.188L2 255.353V16.6165L17.9519 2H237.291L263.611 29.609H384.048L400 45.0376Z"
                  stroke="#4DE5FD"
                  strokeWidth="3.36963"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                handleVerticalCardClick("backend");
              }}
            >
              <img
                draggable={false}
                className={styles.folderContent}
                src="/images/backBL.png"
                alt="backend"
              />
              <svg
                className={styles.folder}
                viewBox="0 0 402 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 228.962L399.601 37.3233L366.9 2L16.3567 2.81204L2 18.6466V257.383L17.9519 272H237.291L263.611 244.391H384.048L400 228.962Z"
                  stroke="#4DE5FD"
                  strokeWidth="3.36963"
                />
              </svg>
            </div>
          </div>
          <div className={styles.secondCol}>
            <svg
              className={styles.topLeft}
              viewBox="0 0 136 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M134 54L109.5 2H0" stroke="#4DE5FD" strokeWidth="3" />
            </svg>
            <svg
              className={styles.topRight}
              viewBox="0 0 136 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 54L26.5 2H136" stroke="#4DE5FD" strokeWidth="3" />
            </svg>

            <svg
              className={styles.dvmLogo}
              viewBox="0 0 119 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M93.4498 15.5435L48.6679 50.5178L24.4265 33.4932V48.1121L48.6679 66.2469L81.4216 40.7102V78.8303L48.6679 103.627L14.2488 78.8303V25.9062L0 15.5435V85.307L48.6679 119.726L93.4498 85.307V15.5435Z" />
              <path d="M118.059 -0.000274658L103.255 10.7326V91.599L48.666 133.605L0.368164 99.0009V116.211L48.666 151L118.059 96.9654V-0.000274658Z" />
            </svg>

            <div className={styles.arcReacter}>
              <img
                draggable={false}
                className={styles.inner}
                src="/images/innerRing.png"
                alt="arc reactor"
              />
              <img
                draggable={false}
                className={styles.mid}
                src="/images/midRing.png"
                alt="arc reactor"
              />
              <img
                draggable={false}
                className={styles.outer}
                src="/images/outerRing.png"
                alt="arc reactor"
              />
            </div>

            <svg
              className={styles.botLeft}
              viewBox="0 0 136 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M134 1.5L109.5 53.5H0"
                stroke="#4DE5FD"
                strokeWidth="3"
              />
            </svg>
            <svg
              className={styles.botRight}
              viewBox="0 0 136 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L26 53.5H135.5"
                stroke="#4DE5FD"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className={styles.thirdCol}>
            <div
              onClick={() => {
                handleVerticalCardClick("frontend");
              }}
            >
              <img
                draggable={false}
                className={styles.folderContent}
                src="/images/frontendTR.png"
                alt="frontend"
              />
              <svg
                className={styles.folder}
                viewBox="0 0 402 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 45.0376L2.3988 236.677L35.1002 272L385.643 271.188L400 255.353V16.6165L384.048 2H164.709L138.389 29.609H17.9519L2 45.0376Z"
                  stroke="#4DE5FD"
                  strokeWidth="3.36963"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                handleVerticalCardClick("video");
              }}
            >
              <img
                draggable={false}
                className={styles.folderContent}
                src="/images/videoBR.png"
                alt="video"
              />
              <svg
                className={styles.folder}
                viewBox="0 0 402 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 228.962L2.3988 37.3233L35.1002 2L385.643 2.81204L400 18.6466V257.383L384.048 272H164.709L138.389 244.391H17.9519L2 228.962Z"
                  stroke="#4DE5FD"
                  strokeWidth="3.36963"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={styles.developerDialog}
          style={showDialog == true ? {} : { display: "none" }}
          ref={glitchIn.ref}
        >
          <img
            src="./images/developersFolderBackground.svg"
            alt="FolderBackground"
            className={styles.folderBackground}
          />
          <p className={styles.verticalHeading}>{vertical}</p>
          <p
            className={styles.backButton}
            onClick={handleVerticalBackButtonClick}
          >
            &lt; BACK
          </p>
          <div className={styles.developerInfoCardContainer}>
            {[
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
              <DeveloperInfoCard />,
            ]}
          </div>
        </div>
        <div className={styles.scrollBar}>
          <img draggable={false} src="/images/outScroll.svg" alt="" />
          <img
            draggable={false}
            src="/images/insideScroll.svg"
            alt=""
            className={styles.inScroll}
            style={{ top: `${scrollPosition}%` }}
          />
        </div>
        <div ref={contentRef} className={styles.mobileContent}>
          <img draggable={false} src="/images/designMobile.png" alt="design" />
          <img draggable={false} src="/images/frontMobile.png" alt="frontend" />
          <img draggable={false} src="/images/backMobile.png" alt="backend" />
          <img
            draggable={false}
            style={{ marginBottom: "10px" }}
            src="/images/videoMobile.png"
            alt="video"
          />
        </div>
        <img
          draggable={false}
          className={styles.bottomHUD}
          src="/images/devPageBottomHUD.png"
          alt="top hud"
        />
      </motion.div>
    </>
  );
}
