import * as styles from "@styles/About.module.scss";
import * as registerStyles from "@styles/Register.module.scss";
import line from "../../assets/about/line.svg";
import Carousel from "./Carousel";

export default function AboutUs() {
  return (
    <>
      <h1 className={styles.title}>ABOUT US</h1>
      <div className={styles.wrapper}>
        {/* <span className={styles.successText}>COMING SOON</span> */}
        <div className={styles.container}>
          <img src={line} alt="" className={styles.line} />
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
            showcasing mankind&apos;s best creations. With guest lectures sharing
            unheard stories, APOGEE challenges the intellect of the participants
            and piques the minds of the audience.
          </div>
        </div>
      </div>
    </>
  );
}
