import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Register.module.scss";
import { motion } from "framer-motion";
import MyForm from "../components/Form/MyForm";
import MyForm2 from "../components/Form/MyForm2";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const mobileContentRef = useRef(null);
  const handleHomeClick = () => {
    navigate("/");
  };
  useEffect(() => {
    const handleScroll = () => {
      const mobileContent = mobileContentRef.current;
      if (mobileContent) {
        const scrollPercentage =
          (mobileContent.scrollTop /
            (mobileContent.scrollHeight - mobileContent.clientHeight)) *
          68;
        setScrollPosition(scrollPercentage);
      }
    };

    const mobileContent = mobileContentRef.current;
    if (mobileContent) {
      mobileContent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mobileContent) {
        mobileContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className={styles.pageContainer}
      ref={mobileContentRef}
    >
      <div className={styles.scrollBar}>
        <img src="/images/outScroll.svg" alt="" className={styles.outScroll} />
        <img
          src="/images/insideScroll.svg"
          alt=""
          className={styles.inScroll}
          style={{ top: `${scrollPosition}%` }}
        />
      </div>
      {/* <span className={styles.heading}>REGISTRATION</span> */}
      <img src="/images/Left helm.png" alt="" className={styles.leftHelm} />
      <img src="/images/Right helm.png" alt="" className={styles.rightHelm} />
      <div className={styles.topContainer}>
        {/* <img
          src="/images/leftMobileReg.png"
          alt=""
          className={styles.leftTop}
        /> */}
        {/* <img
          src="/images/rightMobileReg.png"
          alt=""
          className={styles.rightTop}
        /> */}
        <img src="/images/regTop HUD.png" alt="" className={styles.middleTop} />
        <div className={styles.homeBtn} onClick={handleHomeClick}>
          <span>HOME</span>
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <img src="/images/regTop HUD.png" alt="" className={styles.hud} />
        <div className={styles.content}>
          <div className={styles.homeBtn} onClick={handleHomeClick}>
            <span>HOME</span>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="/images/globeReg.png"
              alt=""
              className={styles.globeImage}
            />
          </div>
          {/* <div className={styles.formContainer}>
            <MyForm />
          </div> */}
          <MyForm />
        </div>
        <div className={styles.mobileContent}>
          <MyForm2 />
        </div>
      </div>
    </motion.div>
  );
}
