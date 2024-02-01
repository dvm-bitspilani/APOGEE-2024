import * as styles from "@styles/Contact.module.scss";
import React from "react";
import phoneIcon from "../../assets/contact/phone.svg";
import mailIcon from "../../assets/contact/mail.svg";
import sampleImage from "../../assets/contact/sample.png"

export default function ContactCard({ image, dept, name, phone, email }) {

    const handlePhoneClick = () => {
        window.location.href = `tel:${phone}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={sampleImage} alt="" draggable='false' />
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
