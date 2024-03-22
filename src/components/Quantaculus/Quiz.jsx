
import React, { useState, useEffect } from "react";
import * as styles from "../../styles/Quantaculus.module.scss";
import Countdown from 'react-countdown';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startTime, setStartTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const fetchQuestions = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('Missing JWT token');
      }

      const response = await fetch("https://bits-apogee.org/2024/main/quanta/question-paper/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error fetching questions');
      }

      const data = await response.json();
      setQuestions(data);
      localStorage.setItem('startTime', data.start_time);
      setStartTime(parseInt(data.start_time) * 1000);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  };



  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.question_paper.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSelect = (optionId) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];

      const existingIndex = updatedAnswers.findIndex(
        (answer) => answer.question_id === currentQuestion + 1
      );

      if (existingIndex !== -1) {
        updatedAnswers[existingIndex] = {
          question_id: currentQuestion + 1,
          option_id: optionId,
        };
      } else {
        updatedAnswers.push({
          question_id: currentQuestion + 1,
          option_id: optionId,
        });
      }

      return updatedAnswers;
    });
  };

  const setCountdownRef = (countdown) => {
    if (countdown) {
      countdownApi = countdown.getApi();
    }
  };

  const handleSubmit = async () => {
    const shouldSubmit = window.confirm("Are you sure you want to submit your answers?");
    if (!shouldSubmit) return; // Exit if user cancels confirmation

    const formattedData = selectedAnswers.map((answer) => ({
      option_id: answer.option_id,
    }));

    const finalData = { start_time: startTime, answers: formattedData };

    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('Missing JWT token');
      }

      const response = await fetch("https://bits-apogee.org/2024/main/quanta/answers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        console.log("Answers submitted successfully!");
        window.location.href = "/quantaculus/submitted"; // Redirect to submitted page
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error submitting answers');
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className={styles.instructions}>
      {!isLoading ? (
        <>
          <div className={styles.header}>
            <div className={styles.questionIndex}>
              Q{currentQuestion + 1} <span> / {questions.question_paper.length}</span>
            </div>
            <div className={styles.questionIndex}>
              <Countdown autoStart="true" date={startTime + 15 * 60 * 1000} onComplete={handleSubmit}/>
            </div>
          </div>

          <div className={styles.problem}>
            {questions.question_paper[currentQuestion].text}
          </div>
          <form action="" className={styles.answer}>
            {questions.question_paper[currentQuestion].options.map(
              (option, index) => (
                <div key={index} className={styles.option}>
                  <input
                    type="radio"
                    name={`option-${currentQuestion}`}
                    id={`option-${currentQuestion}-${index}`}
                    checked={
                      selectedAnswers.some(
                        (answer) =>
                          answer.question_id === currentQuestion + 1 &&
                          answer.option_id === option.id
                      )
                    }
                    onChange={() => handleSelect(option.id)}
                  />
                  <label htmlFor={`option-${currentQuestion}-${index}`}>
                    {option.text}
                  </label>
                </div>
              )
            )}
          </form>

          <div className={styles.navButtons}>
            <button disabled={currentQuestion === 0} onClick={handlePrev}>
              PREV
            </button>

            <button onClick={handleSubmit} className={styles.submitBtn}>
              SUBMIT
            </button>
            <button
              disabled={currentQuestion === questions.question_paper.length - 1}
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
          <button onClick={handleSubmit} className={styles.submitBtnMobile}>
            SUBMIT
          </button>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
