import styles from './bottom.module.css';
function Bottom() {
    return (
        <div className={styles["bottom"]}>
        <div className={styles["logo-bottom"]}>
          <img src="/assets/img/image17.png" alt="logo" />
        </div>
        <h4 className={styles["content"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </h4>
        <div className={styles["socialMedia"]}>
          <a href="/" className={styles["facebook"]}>
            <img src="assets/img/image6.png" alt="facebook" />
          </a>
          <a href="/" className={styles["twitter"]}>
            <img src="assets/img/image7.png" alt="twitter" />
          </a>
          <a href="/" className={styles["telegram"]}>
            <img src="assets/img/image5.png" alt="telegram" />
          </a>
          <a href="/" className={styles["youtube"]}>
            <img src="assets/img/image8.png" alt="youtube" />
          </a>
        </div>
        <div className={styles["copyright"]}>Copyright 2022. All rights reserved</div>
      </div>
    )
}
export default Bottom;