import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../styles/SponsorPage.module.scss";
import sponserTitle from "/images/sponsorTitleText.png";

export default function Sponsors() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  const contentRef = useRef(null);

  const [data, setData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch("https://bits-apogee.org/2024/main/wallet/spons_list/")
      .then((res) => res.json())
      .then((spons) => setData(spons.sponsors));

    function scrollHandler() {
      const content = contentRef.current;
      const scrollPercentage =
        (content.scrollTop / (content.scrollHeight - content.clientHeight)) *
        68;
      setScrollPosition(scrollPercentage);
    }

    contentRef.current.addEventListener("scroll", scrollHandler);
  }, []);

  const sponsorCards = data.map((sponsor) => {
    return (
      <SponsorCard
        key={sponsor.id}
        props={{
          id: sponsor.id,
          name: sponsor.name,
          description: sponsor.category,
          image: sponsor.url,
          web_url: sponsor.web_url,
        }}
      />
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={styles.pageContainer}
    >
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
        src="/images/Top HUD-v1.png"
        alt="top hud"
      />
      <img
        src={sponserTitle}
        alt="sponsor"
        draggable={false}
        className={styles.logo}
      />
      <button
        id="ham-menu-button"
        className={styles.hamMenuButton}
        onClick={handleClick}
      >
        <span>HOME</span>
      </button>
      <div className={styles.contentContainer} ref={contentRef}>
        <div className={styles.sponsorContainer}>
          <div className={styles.firstRow}>{sponsorCards[0]}</div>
          <div className={styles.secondRow}>{sponsorCards[1]}</div>
          <div className={styles.remainingRows}>
            {sponsorCards.splice(2, sponsorCards.length - 2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SponsorCard({ props }) {
  const { name, image, web_url, description } = props;
  const fontStyling = {
    fontSize: "28px",
    fontFamily: "Space Grotesk, Alacrity Sans",
  };
  return (
    <a href={web_url} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt="sponsorLogo" />
      </div>
      <div className={styles.cardContent}>
        <h2 style={{ ...fontStyling, fontWeight: "600" }}>{name}</h2>
        <p style={{ ...fontStyling, fontWeight: "300" }}>{description}</p>
      </div>
    </a>
  );
}
