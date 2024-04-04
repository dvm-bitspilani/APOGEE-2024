import { useState, useEffect, useRef } from "react";
import styles from "../styles/Media_Partners.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Media_Partners() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://bits-apogee.org/2024/main/wallet/media_partners/"
      );
      const json = await res.json();
      setData(json["media_partners"]);
    };
    fetchData();

    function scrollHandler() {
      const content = contentRef.current;
      const scrollPercentage =
        (content.scrollTop / (content.scrollHeight - content.clientHeight)) *
        68;
      setScrollPosition(scrollPercentage);
    }

    contentRef.current.addEventListener("scroll", scrollHandler);
  }, []);

  // map the data to the influencer cards where category is "influencer"
  // const influencerCards = data.map((item) => {
  //   if (item.publication === false) {
  //     return (
  //       <PartnerCard
  //         key={item.name}
  //         name={item.name}
  //         link={item.web_url}
  //         icon={item.url}
  //       />
  //     );
  //   }
  // });

  const publicationCards = data.map((item) => {
    // if (item.publication === true) {
    return (
      <PartnerCard
        key={item.id}
        name={item.name}
        link={item.web_url}
        icon={item.url}
        // publication={item.publication}
        publication={true}
      />
    );
    // }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className={styles.pageContainer}
    >
      <div className={styles.scrollBar}>
        <img
          draggable={false}
          src="/images/outScroll.svg"
          alt=""
          className={styles.outScroll}
        />
        <img
          src="/images/insideScroll.svg"
          alt=""
          className={styles.inScroll}
          style={{ top: `${scrollPosition}%` }}
        />
      </div>
      <img
        draggable={false}
        src="/images/Left helm.png"
        alt=""
        className={styles.leftHelm}
      />
      <img
        draggable={false}
        src="/images/Right helm.png"
        alt=""
        className={styles.rightHelm}
      />
      <div className={styles.homeBtn} onClick={handleHomeClick}>
        <span>HOME</span>
      </div>
      <div className={styles.pageWrapper}>
        <img src="/images/Top HUD-v1.png" alt="" className={styles.hud} />
        <img
          src="/images/media partners heading.png"
          alt=""
          className={styles.headinghud}
        />
        <div className={styles.content}>
          <div className={styles.sponsorsContentContainer} ref={contentRef}>
            <div className={styles.cardsContainer}>
              <h1>Publications</h1>
              {publicationCards}
              {/*<h1>Influencers</h1>
              {influencerCards}*/}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PartnerCard(props) {
  // console.log(props.icon);
  return (
    // <a className={styles.card} href={props.link}>
    //   {props.icon && (
    //     <div
    //       className={styles.imgContainer}
    //       style={{
    //         backgroundImage: `url(${props.icon})`,
    //         // backgroundSize: props.publication ? "contain" : "cover",
    //         backgroundSize: "contain",
    //       }}
    //     ></div>
    //   )}
    //   <h2>{props.name}</h2>
    // </a>

    <div>
      <a className={styles.card} href={props.link}>
          <img src={props.icon} className={styles.cardImg} alt="" />
          <h2>{props.name}</h2>
      </a>
    </div>
  );
}
