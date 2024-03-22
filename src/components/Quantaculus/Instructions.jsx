import React from 'react'
import * as styles from '../../styles/Quantaculus.module.scss'

const Instructions = ({onQuizOpen}) => {

  const handleSubmit = async (event) => {
    onQuizOpen();
    event.preventDefault();
  }

  return (
    <div className={styles.instructions}>
        <h1>INSTRUCTIONS</h1>
        <ul>
            <li>Total Questions: 80</li>
            <li>Total Time: 15 mins</li>
            <li>Marking Scheme:  +1 for correct answer/ -1 for wrong answer/ 0 for unattempted.</li>
            <li>The test will auto-submit after the countdown of 15 minutes runs out.</li>
            <li>The test has to be attempted using only one device. Both the teammates have to attempt it together through a single device.</li>
            <li>The responses cannot be changed after a test has been submitted.</li>
            <li>Use of unfair means is not allowed. The use of calculators and using internet for obtaining answers is strictly prohibited. If found guilty, SAC reserves the right to disqualify the team.</li>
            <li>Time taken to answer all the correct questions is to be considered in case of tiebreaker.</li>
        </ul>

        <button onClick={handleSubmit}>NEXT</button>
    </div>
  )
}

export default Instructions