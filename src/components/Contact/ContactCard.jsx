import * as styles from "@styles/Contact.module.scss";
import React from "react";
import phoneIcon from "../../assets/contact/phone.svg";
import mailIcon from "../../assets/contact/mail.svg";
import sample from "../../assets/contact/sample.png"
import vedant from "../../assets/contact/vedant.png"
import sachika from "../../assets/contact/sachika.png"
import dharun from "../../assets/contact/dharun.png"
import yash from "../../assets/contact/yash.png"
import tushar from "../../assets/contact/tushar.png"
import noname from "../../assets/contact/noname.png"
import lamba from "../../assets/contact/lamba.png"

export default function ContactCard({ image, dept, name, phone, email }) {

    const imageMap = {
        vedant: vedant,
        sachika: sachika,
        dharun: dharun,
        yash: yash,
        tushar: tushar,
        noname: noname,
        lamba: lamba,
        sample: sample
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
                <img src={imageMap[image]} alt="" draggable='false' />
            </div>
            <div className={styles.dept}>{dept}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.buttons}>
                <button className={styles.phone} onClick={handlePhoneClick}>
                    <img src={phoneIcon} alt="" draggable='false' />
                </button>
                <button className={styles.mail} onClick={handleEmailClick}>
                    <img src={mailIcon} alt="" draggable='false' />
                </button>
            </div>
        </div>
    )
}
