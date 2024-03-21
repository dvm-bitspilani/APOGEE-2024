import React from "react";
import * as styles from "../../styles/Quantaculus.module.scss";

const Quiz = () => {
  return (
    <div className={styles.instructions}>
      <div className={styles.questionIndex}>
        Q1 <span> / 15</span>
      </div>

      <div className={styles.problem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui
        tortor, efficitur quis aliquam et, sollicitudin at mauris. Nulla sed
        nibh non nisl dictum aliquet. Phasellus tincidunt tincidunt sapien, eu
        elementum lorem luctus facilisis. Morbi sed sem vestibulum, pharetra
        justo a, luctus diam. 
      </div>
      <form action="" className={styles.answer}>
        <div className={styles.option}>
          <input type="radio" name="option" id="option1" />
          <label htmlFor="option1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui tortor</label>
        </div>
        <div className={styles.option}>
          <input type="radio" name="option" id="option2" />
          <label htmlFor="option2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui tortor</label>
        </div>
        <div className={styles.option}>
          <input type="radio" name="option" id="option3" />
          <label htmlFor="option3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui tortor</label>
        </div>
        <div className={styles.option}>
          <input type="radio" name="option" id="option4" />
          <label htmlFor="option4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui tortor</label>
        </div>
      </form>
      <div className={styles.navButtons}>
        <button>PREV</button>
        <button>NEXT</button>
      </div>
    </div>
  );
};

export default Quiz;
