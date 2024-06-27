import * as styles from "@styles/Contact.module.scss";
import React, { useRef } from "react";
import phoneIcon from "../../assets/contact/phone.svg";
import mailIcon from "../../assets/contact/mail.svg";
import vedant from "../../assets/contact/vedant.png";
import sachika from "../../assets/contact/sachika.png";
import dharun from "../../assets/contact/dharun.png";
import yash from "../../assets/contact/yash.png";
import tushar from "../../assets/contact/tushar.png";
import aarohi from "../../assets/contact/aarohi.png";
import abhinav from "../../assets/contact/abhinav.png";
import pratham from "../../assets/contact/pratham.png"
import sarthak from "../../assets/contact/sarthak.png";
import framebar from "../../assets/contact/frame-bar.svg";

export default function ContactCard({ image, dept, name, phone, email }) {
  const imageMap = {
    vedant: vedant,
    sachika: sachika,
    dharun: dharun,
    yash: yash,
    tushar: tushar,
    aarohi: aarohi,
    abhinav: abhinav,
    pratham: pratham,
    sarthak: sarthak,
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.frameBar}>
          <img src={framebar} alt="" draggable="false" />
        </div>
        <img src={imageMap[image]} alt="" draggable="false" />
      </div>
      <div className={styles.dept}>{dept}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.buttons}>
        {phone && (
          <button className={styles.phone} onClick={handlePhoneClick}>
            <img src={phoneIcon} alt="" draggable="false" />
          </button>
        )}
        <button id="icon" className={styles.mail} onClick={handleEmailClick}>
          <img src={mailIcon} alt="" draggable="false" />
        </button>
      </div>
    </div>
  );
}
