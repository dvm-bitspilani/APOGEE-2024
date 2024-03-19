import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "@styles/HUD.module.scss";
import * as sponsorStyles from "../styles/SponsorPage.module.scss"
import sponserTitle from "../../public/images/sponsorTitleText.png"

export default function Sponsors() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  const [data, setData] = useState([])

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch(
    //     "sponsors.json"
    //   )
    //   const json = await res.json()
    //   // setTimeout(() => {
    //   //   setIsLoading(false)
    //   // }, 1000)
    //   setData(json)
    // }
    // fetchData()
    // fetch('http://localhost:5173/sponsors.json', {
    //   headers: {
    //     "Content-type": "application/json",
    //     "Accept": "application/json"
    //   }
    // }).then(res => res.json()).then(sponsorsData => setData(sponsorsData))
    setData([
      {
        "id": "eightfold",
        "name": "eightfold.ai",
        "category": "Title Sponsor",
        "url": "https://www.gartner.com/imagesrv/peer-insights/vendors/logos/eightfold.png",
        "web_url": "https://eightfold.ai/"
      },
      {
        "id": "cisco",
        "name": "Cisco",
        "category": "Powered by Sponsor",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
        "web_url": "https://www.cisco.com/site/in/en/index.html"
      },
      {
        "id": "mpower",
        "name": "MPower",
        "category": "Mental Health Parnter",
        "url": "https://www.ayushmanbharatconclave.com/wp-content/uploads/2015/11/Mpower-Logo-With-services.png",
        "web_url": "#"
      },
      {
        "id": "horus",
        "name": "Horus Music",
        "category": "Music Parnter",
        "url": "https://www.horusmusic.global/wp-content/uploads/2024/01/Horus-Music-Global-02-e1705497079381.png",
        "web_url": "#"
      },
      {
        "id": "musicDiaries",
        "name": "The Indian Music Diaries",
        "category": "Official Media Parnter",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqeRuD81LpJdKMsOK58lfEKxGZiSKYOYtiB2Tr7PHPw&s",
        "web_url": "#"
      }
    ])
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
      <div className={sponsorStyles.sponsorContainer}>
        <div className={sponsorStyles.firstRow}>{sponsorCards[0]}</div>
        <div className={sponsorStyles.secondRow}>{sponsorCards[1]}</div>
        <div className={sponsorStyles.remainingRows}>{sponsorCards.splice(2, sponsorCards.length - 2)}</div>
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
