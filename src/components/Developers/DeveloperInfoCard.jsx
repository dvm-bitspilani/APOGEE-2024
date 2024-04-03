import * as styles from "../../styles/DeveloperInfoCard.module.scss";

const DeveloperInfoCard = ({
  name,
  image,
  linkedin,
  github,
  instagram,
  behance,
}) => {
  console.log("hello");
  return (
    <div className={styles.developerInfoCard}>
      <div className={styles.developerPhoto}>
        <img src={image} alt="Developer's Photo" />
        <img
          src="./images/Developers/DeveloperPhotoBorder.svg"
          alt="DevelopersPhotoBorder"
        />
      </div>
      <p className={styles.developerName}>{name}</p>
      <div className={styles.developerSocialMedia}>
        {/* <a href="">
          <img src="./images/Developers/Behance.svg" alt="Behance" />
        </a>
        <a href="">
          <img src="./images/Developers/Behance.svg" alt="Behance" />
        </a>
        <a href="">
          <img src="./images/Developers/Behance.svg" alt="Behance" />
        </a> */}
        {linkedin == "" ? null : (
          <a href={linkedin} target="_blank">
            <img src="./images/Developers/Linkedin.svg" alt="LinkedIn" />
          </a>
        )}
        {github == "" ? null : (
          <a href={github} target="_blank">
            <img src="./images/Developers/Github.svg" alt="Github" />
          </a>
        )}
        {instagram == "" ? null : (
          <a href={instagram} target="_blank">
            <img src="./images/Developers/Instagram.svg" alt="Instagram" />
          </a>
        )}
        {behance == "" ? null : (
          <a href={behance} target="_blank">
            <img src="./images/Developers/Behance.svg" alt="Behance" />
          </a>
        )}
      </div>
    </div>
  );
};
export default DeveloperInfoCard;
