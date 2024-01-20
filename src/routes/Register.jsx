import React from "react";
import styles from "../styles/Register.module.scss";
import { motion } from "framer-motion";
import MyForm from "../components/Form/MyForm";
import MyForm2 from "../components/Form/MyForm2";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    console.log('first');
    navigate('/');
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className={styles.pageContainer}
    >
      <span className={styles.heading}>REGISTRATION</span>
      <img src="/images/Left helm.png" alt="" className={styles.leftHelm}/>
      <img src="/images/Right helm.png" alt="" className={styles.rightHelm}/>
      <div className={styles.topContainer}>
      <img src="/images/leftMobileReg.png" alt="" className={styles.leftTop} />
      <img
        src="/images/rightMobileReg.png"
        alt=""
        className={styles.rightTop}
      />
      <img src="/images/topMobile.png" alt="" className={styles.middleTop} />
      <div className={styles.homeBtn} onClick={handleHomeClick}>
        <span>HOME</span>
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <img src="/images/Top HUD.svg" alt="" className={styles.hud} />
        <div className={styles.content}>
        <div className={styles.homeBtn}  onClick={handleHomeClick}>
        <span>HOME</span>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/globeReg.png" alt="" className={styles.globeImage}/>
        </div>
          <div className={styles.formContainer}>
            <MyForm />
          </div>
          
      </div>
      <div className={styles.mobileContent}>
        <MyForm2/>
      </div>
      </div>
    </motion.div>
  );
}
