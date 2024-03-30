import * as styles from "@styles/HamMenu.module.scss";
import faqPdf from "../../assets/faqs.pdf"
import apogeeLogo from "@assets/hamMenu/logo.svg";
import { useState } from "react";
export default function ConstellationDetected() {
  const [permissionAsked, setPermissionAsked] = useState(false);
  function faqsClicked(){
    window.open(faqPdf, "_blank")
  }
  function openMaps(e) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const destination = "4rggt3, Gandhi Marg, Birla Institute of Technology and Science Area, BITS Pilani Campus, Rajasthan, 333031 ";
      // const destination = "BITS Pilani Campus, Rajasthan";
      const url = `https://maps.mapmyindia.com/@${lat},${lng},15z/${destination}`;
      // const newWindow = window.open(url, "_blank");
      // if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      //   alert("Please allow popup windows to proceed to the maps.");
      // }
      window.location.href = url;
    });
  }
  function logoClicked(e) {
    e.stopPropagation();
    openMaps();
  }
  return (
    <div className={`${styles.constellationDetected} ${styles.menu}`} onClick={faqsClicked}>
      <div className={styles.apogeeLogo}>
        <img src={apogeeLogo} alt="apogee logo"  onClick={logoClicked}/>
      </div>
      <div className={styles.textContainer}>
        <h1  onClick={logoClicked}>Route to Pilani</h1>
        <p onClick={faqsClicked}>FAQs</p>
      </div>
    </div>
  );
}
