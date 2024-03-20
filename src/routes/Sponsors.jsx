import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "@styles/HUD.module.scss";
import * as sponsorStyles from "../styles/SponsorPage.module.scss"
import sponserTitle from "/images/sponsorTitleText.png"

export default function Sponsors() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bits-apogee.org/2024/main/wallet/spons_list/"
      )
      const json = await res.json()
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 1000)
      setData(json.sponsors)
    }
    fetchData()
  }, [])

  console.log(data)
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
    )
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={sponsorStyles.pageContainer}
    >
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
      {/* <TopHUD /> */}
      <img
        draggable={false}
        className={sponsorStyles.tophud}
        src="/images/Top HUD-v1.png"
        alt="top hud"
      />
      <img
        src={sponserTitle}
        alt="sponsor"
        draggable={false}
        className={sponsorStyles.logo}
      />
      <button
        id="ham-menu-button"
        className={sponsorStyles.hamMenuButton}
        onClick={handleClick}
      >
        <span>HOME</span>
      </button>
      <div className={sponsorStyles.contentContainer}>
        <div className={sponsorStyles.sponsorContainer}>
          <div className={sponsorStyles.firstRow}>{sponsorCards[0]}</div>
          <div className={sponsorStyles.secondRow}>{sponsorCards[1]}</div>
          <div className={sponsorStyles.remainingRows}>{sponsorCards.splice(2, sponsorCards.length - 2)}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function SponsorCard({ props }) {
  const { name, image, web_url, description } = props;
  return (
    <a href={web_url} className={sponsorStyles.card}>
      <div className={sponsorStyles.imageContainer}>
        <img src={image} alt="sponsorLogo" />
      </div>
      <div className={sponsorStyles.cardContent}>
        <h2 style={{ fontSize: '28px', color: '#ffffff', fontFamily: 'Space Grotesk, Alacrity Sans', fontWeight: '500' }}>{name}</h2>
        <p style={{ fontSize: '28px', color: '#ffffff', fontFamily: 'Space Grotesk, Alacrity Sans', fontWeight: '400' }}>{description}</p>
      </div>
    </a>
  )
}
