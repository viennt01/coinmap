import React from 'react';
import axios from 'axios';
import {validateLogin} from '../validateInput/validateInput';
// import Validate from '../validateInput';
import styles from './login.module.css';
import Bottom from '../Bottom';
import Header from '../Header';
import useForm from '../../hooks/useForm'
import {useHistory} from 'react-router-dom'


function LoginHome() {
  const history = useHistory();
  function postLogin() {
    axios({
      method: "POST",
      url: "https://coinmaphiring.coinmap.tech/login",
      data: {
        email: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        localStorage.setItem("coinMapLogin", JSON.stringify(res.data));
        history.push('/loginSuccess')
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    postLogin,
    validateLogin
  );
  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["login"]}>
          <h1 className={styles["name"]}>Login</h1>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="username"
              placeholder="Fill your email Or UserName address"
              className={styles["email"]} 
              onChange={handleChange}
              value={values.username || ""}
              required
            />
            <p>{errors.username}</p>
            <input
              type="password"
              name="password"
              className={styles["password"]}
              placeholder="Password"
              onChange={handleChange}
              value={values.password || ""}
              required
            ></input>
            <p>{errors.password}</p>
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
