import styles from './loginSuccess.module.css';
import Footer from '../Footer';
import Header from '../Header';

function LoginSuccessFull() {
  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["login"]}>
          <div className={styles["success"]}>
            <img
              className={styles["tickgreen"]}
              src="/assets/img/tickgreen.png"
              alt="tickgreen"
            />
            <img className={styles["tick"]} src="/assets/img/tick.png" alt="tick" />
            <h1 className={styles["title"]}>Successful</h1>
          </div>
          <p className={styles["status"]}>You can now use all features on the platform</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LoginSuccessFull;
