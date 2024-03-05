import React, { useEffect, useRef, useState } from 'react';
import styles from "../styles/Armageddon.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Armageddon = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    };
    const cardContainerRef = useRef(null);
    const handleMouseMove = (e) => {
        const container = cardContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    const maxRotationX = 10;
    const maxRotationY = 20;

    const rotationX = ((mouseY / containerRect.height) - 0.5) * maxRotationX * 2;
    const rotationY = ((mouseX / containerRect.width) - 0.5) * maxRotationY * 2;

    container.style.setProperty('--tilt-x', `${rotationX}deg`);
    container.style.setProperty('--tilt-y', `${rotationY}deg`);
    };

    const handleMouseLeave = () => {
        const container = cardContainerRef.current;
        container.style.setProperty('--tilt-x', '0deg');
        container.style.setProperty('--tilt-y', '0deg');
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
                className={styles.pageContainer}
                ref={cardContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
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
                <div className={styles.topContainer}>
                    <img src="/images/regTop HUD.png" alt="" className={styles.middleTop} />
                    <div className={styles.homeBtn} onClick={handleHomeClick}>
                        <span>Home</span>
                    </div>
                </div>
                <div className={styles.pageWrapper}>
                    <img src="/images/regTop HUD.png" alt="" className={styles.hud} />
                    <div className={styles.homeBtn} onClick={handleHomeClick}>
                        <span>Home</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imgWrapper}>
                                    <img
                                        src="/images/frame.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.frame}
                                    />
                                    <img
                                        src="/images/crNew.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.images}
                                    />
                                    <img src="/images/kuchBhi.png" alt="" className={styles.kuchBhi}/>
                                    <div className={styles.regBtn}>Register</div>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imgWrapper}>
                                <img
                                        src="/images/frame.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.frame}
                                    />
                                    <img
                                        src="/images/valoNew.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.images}
                                    />
                                                                        <img src="/images/kuchBhi.png" alt="" className={styles.kuchBhi}/>
                                    <div className={styles.regBtn}>Register</div>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imgWrapper}>
                                <img
                                        src="/images/frame.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.frame}
                                    />
                                                                        <img src="/images/kuchBhi.png" alt="" className={styles.kuchBhi}/>
                                    <img
                                        src="/images/fifaNew.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.images}
                                    />
                                    <div className={styles.regBtn}>Register</div>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imgWrapper}>
                                <img
                                        src="/images/frame.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.frame}
                                    />
                                    <img src="/images/kuchBhi.png" alt="" className={styles.kuchBhi}/>
                                    <img
                                        src="/images/bgmiNew.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.images}
                                    />
                                    <div className={styles.regBtn}>Register</div>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imgWrapper} >
                                <img
                                        src="/images/frame.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.frame}
                                    />
                                    {/* <div className={styles.kuchBhi}></div> */}
                                    <img src="/images/kuchBhi.png" alt="" className={styles.kuchBhi}/>
                                    <img
                                        src="/images/miniMilitiaNew.png"
                                        alt="BGMI"
                                        draggable={false}
                                        className={styles.images}
                                    />
                                    <div className={styles.regBtn}>Register</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Armageddon;
