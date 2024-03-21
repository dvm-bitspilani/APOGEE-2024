import React from 'react'
import * as styles from '../../styles/Quantaculus.module.scss'
import quizLogin from "../../../public/images/quiz-login.png"

const Login = () => {
  return (
    <div className={styles.loginBox}>
      <img src={quizLogin} alt="" className={styles.loginFrame} />
        <h1 className={styles.heading}>LOGIN</h1>
        <form action="" className={styles.loginForm}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input type="text" placeholder="" />
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" placeholder="" />
            <input type="submit" value="Login" className={styles.submit} />
        </form>
    </div>
  )
}

export default Login