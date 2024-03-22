import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Quantaculus.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "../components/Quantaculus/Login";
import Instructions from "../components/Quantaculus/Instructions";
import Quiz from "../components/Quantaculus/Quiz";
import contentBox from "../../public/images/content-box.png";
import contentBoxMobile from "../../public/images/content-box-mobile.png";

const Quantaculus = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // setErrorMessage('');
  };

  const handleLoginError = (error) => {
    setIsLoggedIn(false);
    // setErrorMessage(error);
  };

  const handleQuizOpen = () => {
    setIsQuizOpen(true);
  };

  // console.log(isLoggedIn)


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className={styles.pageContainer}
      >
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
        <div className={styles.pageWrapper}>
          <img src="/images/topHudQuiz.png" alt="" className={styles.hud} />
          <div className={styles.homeBtn} onClick={handleHomeClick}>
            <span>Home</span>
          </div>
        </div>
          <div className={styles.contentBox}>
            {typeof window !== "undefined" ? (
              window.innerWidth > 768 ? (
                <img src={contentBox} alt="" />
              ) : (
                <img src={contentBoxMobile} alt="" />
              )
            ) : (
              ""
            )}
            
                Submitted Successfully!
          </div>

      </motion.div>
    </>
  );
};

export default Quantaculus;
