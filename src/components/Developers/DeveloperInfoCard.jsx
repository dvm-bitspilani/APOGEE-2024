import * as styles from "../../styles/DeveloperInfoCard.module.scss";

const DeveloperInfoCard = () => {
  return (
    <div className={styles.developerInfoCard}>
      <div className={styles.developerPhoto}>
        <img src="./images/Developers/person.png" alt="Developer's Photo" />
        <img
          src="./images/Developers/DeveloperPhotoBorder.svg"
          alt="DevelopersPhotoBorder"
        />
      </div>
      <p className={styles.developerName}>Ankit Khatua</p>
      <div className={styles.developerSocialMedia}>
        <img src="./images/Developers/Behance.svg" alt="Behance" />
        <img src="./images/Developers/Behance.svg" alt="Behance" />
        <img src="./images/Developers/Behance.svg" alt="Behance" />
      </div>
    </div>
  );
};
export default DeveloperInfoCard;
