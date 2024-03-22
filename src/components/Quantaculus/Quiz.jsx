import React, { useState, useEffect } from "react";
import * as styles from "../../styles/Quantaculus.module.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // console.log(selectedAnswers)
  // console.log(questions.question_paper.length)

  const decrementTime = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    } else {
      handleSubmit();
    }
  };

  const formattedTime = (timeLeft) => {
    const minutes = `${Math.floor(timeLeft / 60)}`.padStart(2, "0");
    const seconds = `${timeLeft % 60}`.padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://bits-apogee.org/2024/main/quanta/question-paper/");
      const data = await response.json();
      setQuestions(data);
      // console.log('yes')
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
          time_spent: timeLeft,
        };
      } else {
        updatedAnswers.push({
          question_id: currentQuestion + 1,
          option_id: optionId,
          time_spent: timeLeft,
        });
      }

      return updatedAnswers;
    });
  };

  const handleSubmit = async () => {
    const formattedData = selectedAnswers.map((answer) => ({
      question_id: answer.question_id,
      option_id: answer.option_id,
      time_spent: Math.floor((15 * 60 - timeLeft) / 1000),
    }));

    try {
      const response = await fetch("https://bits-apogee.org/2024/main/quanta/answers/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });
      if (response.ok) {
        console.log("Answers submitted successfully!");
      } else {
        console.error("Error submitting answers:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(decrementTime, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isLoading]);

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
            <div className={styles.questionIndex}>{formattedTime(timeLeft)}</div>
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
                    name={`option-${currentQuestion}`} // Unique name for each question's options
                    id={`option-${currentQuestion}-${index}`}
                    checked={
                      // Check if the current option matches the selected answer for this question
                      selectedAnswers.some(
                        (answer) =>
                          answer.question_id === currentQuestion + 1 &&
                          answer.option_id === option.id
                      )
                    }
                    onChange={() => handleSelect(option.id)} // Call handleSelect on change
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

            <button onClick={handleSubmit} id={styles.submitBtn}>
              SUBMIT
            </button>
            <button
              disabled={currentQuestion === questions.question_paper.length - 1}
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
