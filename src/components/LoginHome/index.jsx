import React from 'react';
import {validateLogin} from '../validateInput/validateInput';
import Validate from '../validateInput';
import styles from './login.module.css';
import Bottom from '../Bottom';
import Header from '../Header';
import useForm from '../../hooks/useForm'

function LoginHome() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateLogin
  );
  function login() {
    // postLogin(values.username, values.password);
  }
  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["login"]}>
          <h1 className={styles["name"]}>Login</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className={styles["email"]} 
              placeholder="Email" 
              onChange={handleChange}
              value={values.username || ""}
              />
              <Validate errors={errors.username} />
            <input
              type="password"
              className={styles["password"]}
              placeholder="Password"
              onChange={handleChange}
              value={values.password || ""}
            ></input>
            <Validate errors={errors.password} />
            <img className={styles["mat"]} src="/assets/img/mat.png" alt="mat" />

            <input type="checkbox" className={styles["check"]} />
            <span className={styles["remember"]}>Remember me</span>
            <a href="/" className={styles["forgotPassword"]}>
              Forgot password?
            </a>

            <button className={styles["btn-login"]}>
              <span className={styles["btn-login--name"]}>LOGIN</span>
            </button>
          </form>

          <span className={styles["account"]}>Need an account?</span>
          <span className={styles["register"]}>Register now?</span>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
export default LoginHome;
