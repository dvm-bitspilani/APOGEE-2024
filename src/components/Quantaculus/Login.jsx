import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/Quantaculus.module.scss';
import quizLogin from "../../../public/images/quiz-login.png";

const Login = ({ onLoginSuccess, onLoginError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for show/hide password feature

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await fetch('https://bits-apogee.org/2024/main/quanta/login/', {
          method: 'GET',
        });
        if (response.ok) {
          onLoginSuccess();
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLoggedIn();
  }, []);

  const handleSubmit = async (event) => {
    console.log(username, password);
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter username and password.');
      return;
    }

    try {
      const response = await fetch('https://bits-apogee.org/2024/main/quanta/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
        onLoginError(error);
      } else {
        onLoginSuccess();
      }
    } catch (error) {
      // setErrorMessage(error);
    }
  };

  return (
    <div className={styles.loginBox}>
      <img src={quizLogin} alt="" className={styles.loginFrame} />
      <h1 className={styles.heading}>LOGIN</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input
          type="text"
          placeholder=""
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className={styles.passlabel}>
          <div className={styles.label}>Password</div>
        <div className={styles.showPassword}>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword} // Set checkbox checked state
            onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state on change
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        </label>
        <input
          type={showPassword ? "text" : "password"} // Toggle input type based on state
          placeholder=""
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <input type="submit" value="Login" className={styles.submit} />
      </form>
    </div>
  );
};

export default Login;
