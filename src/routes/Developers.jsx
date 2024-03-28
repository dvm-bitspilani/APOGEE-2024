import { motion } from "framer-motion";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../styles/Developers.module.scss";
import devTitle from "/images/DevelopersTitleText.png";

export default function Developers() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={styles.pageContainer}
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
            <img
                draggable={false}
                className={styles.tophud}
                src="/images/devPageTopHUD.png"
                alt="top hud"
            />
            <button
                id="ham-menu-button"
                className={styles.hamMenuButton}
                onClick={handleClick}
            >
                <span>HOME</span>
            </button>
            <img
                draggable={false}
                className={styles.bottomHUD}
                src="/images/devPageBottomHUD.png"
                alt="top hud"
            />
        </motion.div>
    )
}