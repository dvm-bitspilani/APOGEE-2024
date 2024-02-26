import * as styles from "@styles/About.module.scss";
import * as registerStyles from "@styles/Register.module.scss";
import Carousel from "./Carousel";
import RightLine from "./rightLine";
import LeftLine from "./leftLine";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../state";
export default function AboutUs() {
  useSnapshot(state)
  const [linesVisible, setLinesVisible] = useState(false);
  useEffect(() => {
    if (state.activeSection === 1) {
      setLinesVisible(true);
    } else {
      setLinesVisible(false);
    }
  }, [state.activeSection]);
  return (
    <>
      <h1 className={styles.title}>ABOUT US</h1>
      <div className={styles.wrapper}>
        {/* <span className={styles.successText}>COMING SOON</span> */}
        <div className={styles.container}>
          <img src="/images/background.png" alt="" className={styles.bgImage}/>
          {/* <img src={line} alt="" className={styles.line} />
           */}
           <div className={styles.line}>
           {/* <svg width="887" height="60" viewBox="0 0 887 60" fill="none" xmlns="http://www.w3.org/2000/svg"  className={styles.lineSvg}>
          <line y1="-1.89655" x2="76.9088" y2="-1.89655" transform="matrix(0.711247 0.702942 -0.600521 0.799609 0 3.69531)" stroke="#3FBBCF" stroke-width="3.7931" className={styles.lineSvg}/>
          <path d="M54.7014 57.274C203.707 48.0954 438.451 46.1719 438.451 46.1719C438.451 46.1719 679.533 46.5051 833.982 57.274" stroke="#3FBBCF" stroke-width="3.7931" className={styles.lineSvg}/>
          <line y1="-1.89655" x2="75.7209" y2="-1.89655" transform="matrix(0.700177 -0.71397 0.612502 0.790469 833.982 57.7578)" stroke="#3FBBCF" stroke-width="3.7931" className={styles.lineSvg}/>
          </svg> */}
 {linesVisible && (
            <div className={styles.line}>
              <RightLine />
              <LeftLine />
            </div>
          )}
          </div>


          {/* <div className={styles.videocontainer}>
            <div className={styles.video}>
              <iframe
                className={styles.videoembed}
                src="https://www.youtube.com/embed/Mdhw5tI7HgE?si=Z2WNrhu5q8iyGREw&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div> */}
          <div className={styles["carouselContainer"]}>
            <Carousel />
          </div>
          <div className={styles.text}>
            BITS Pilani, India is back with the 42nd edition of APOGEE (A
            Professions Oriented Gathering over Educational Experiences) the
            institute&apos;s annual technical extravaganza, from 4th April to
            7th April 2024, this time as A Celestial Epiphany! APOGEE, a unique
            blend of technology, innovation, and inspiration, gathers the
            brightest minds worldwide. This premier technical conference
            features groundbreaking papers, innovative projects, and exhibitions
            showcasing mankind&apos;s best creations. With guest lectures
            sharing unheard stories, APOGEE challenges the intellect of the
            participants and piques the minds of the audience.
          </div>
        </div>
      </div>
    </>
  );
}
