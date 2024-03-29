import { motion } from "framer-motion";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../styles/Developers.module.scss";

export default function Developers() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    }

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
                className={styles.devPageCodes}
                src="/images/DevPage-Codes.png"
                alt="dev page codes"
                style={{ position: "fixed" }}
            />
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
            <div
                className={styles.arcGrid}
            >
                <div
                    className={styles.firstCol}
                >
                    <div>
                        <svg className={styles.folder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 274" fill="none">
                            <path d="M400 236.5V185.605V45L384 29.5H264L237.5 2H18L2 16V255L17 272H366.5L400 236.5Z" stroke="#4DE5FD" stroke-width="3.36963" />
                        </svg>
                    </div>
                    <div>
                        <svg className={styles.folder} viewBox="0 0 402 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 228.962L399.601 37.3233L366.9 2L16.3567 2.81204L2 18.6466V257.383L17.9519 272H237.291L263.611 244.391H384.048L400 228.962Z" stroke="#4DE5FD" stroke-width="3.36963" />
                        </svg>
                    </div>
                </div>
                <div
                    className={styles.secondCol}
                >
                    <svg className={styles.topLeft} viewBox="0 0 136 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M134 54L109.5 2H0" stroke="#4DE5FD" stroke-width="3" />
                    </svg>
                    <svg className={styles.topRight} viewBox="0 0 136 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 54L26.5 2H136" stroke="#4DE5FD" stroke-width="3" />
                    </svg>

                    <svg className={styles.dvmLogo} viewBox="0 0 119 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93.4498 15.5435L48.6679 50.5178L24.4265 33.4932V48.1121L48.6679 66.2469L81.4216 40.7102V78.8303L48.6679 103.627L14.2488 78.8303V25.9062L0 15.5435V85.307L48.6679 119.726L93.4498 85.307V15.5435Z" />
                        <path d="M118.059 -0.000274658L103.255 10.7326V91.599L48.666 133.605L0.368164 99.0009V116.211L48.666 151L118.059 96.9654V-0.000274658Z" />
                    </svg>

                    <img
                        draggable={false}
                        className={styles.arcReactor}
                        src="/images/arcReactorNoLogo.png"
                        alt="arc reactor"
                    />

                    <svg className={styles.botLeft} viewBox="0 0 136 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M134 1.5L109.5 53.5H0" stroke="#4DE5FD" stroke-width="3" />
                    </svg>
                    <svg className={styles.botRight} viewBox="0 0 136 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L26 53.5H135.5" stroke="#4DE5FD" stroke-width="3" />
                    </svg>

                </div>
                <div
                    className={styles.thirdCol}
                >
                    <div>
                        <svg className={styles.folder} viewBox="0 0 402 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 45.0376L2.3988 236.677L35.1002 272L385.643 271.188L400 255.353V16.6165L384.048 2H164.709L138.389 29.609H17.9519L2 45.0376Z" stroke="#4DE5FD" stroke-width="3.36963" />
                        </svg>
                    </div>
                    <div>
                        <svg className={styles.folder} viewBox="0 0 402 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 228.962L2.3988 37.3233L35.1002 2L385.643 2.81204L400 18.6466V257.383L384.048 272H164.709L138.389 244.391H17.9519L2 228.962Z" stroke="#4DE5FD" stroke-width="3.36963" />
                        </svg>
                    </div>
                </div>
            </div>
            <img
                draggable={false}
                className={styles.bottomHUD}
                src="/images/devPageBottomHUD.png"
                alt="top hud"
            />
        </motion.div>
    )
}