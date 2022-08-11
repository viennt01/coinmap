import React, { useState } from 'react';
import axios from 'axios';
import {validateLogin} from '../validateInput/validateInput';

import styles from './login.module.css';
import Footer from '../Footer';
import Header from '../Header';
import useForm from '../../hooks/useForm'
import {useHistory} from 'react-router-dom'

function LoginHome() {
  const history = useHistory();
  const [type, setType]=useState('password');
  const [notification, setNotification] = useState("");
  const handleToggle=()=>{    
    if(type==='password'){     
      setType('text');
    }
    else{   
      setType('password');
    }
  }
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
        if(res.data.error_code === "SUCCESS"){
          localStorage.setItem("coinMapLogin", JSON.stringify(res.data));
          history.push('/loginSuccess');
          setNotification("");
        }else{
          setNotification("Email or password incorrect!");
        }
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
        <div className={styles["login"]}>
          <div className={styles["name"]}>
            <span>Login</span>
            <span className={styles["notification"]}>{notification}</span>
          </div>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="username"
              placeholder="Email"
              className={styles["email"]} 
              onChange={handleChange}
              value={values.username || ""}
              required
            />
            <p className={styles["errorsUsername"]}>
                  {errors.username}
            </p>
            <input
              type={type}
              name="password"
              className={styles["password"]}
              placeholder="Password"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <p className={styles["errorsPassword"]}>
                  {errors.password}
            </p>
            <img className={styles["mat"]} src="/assets/img/mat.png" alt="mat" onClick={handleToggle} />

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
      <Footer />
    </div>
  );
}
export default LoginHome;
