import styles from './header.module.css';

function Header() {
    return(
        <div className={styles["header"]}>
          <div className={styles["logo"]}>
            <img src="/assets/img/image17.png" alt="logo" />
          </div>
          <div className={styles["topbar"]}>
            <img src="/assets/img/Vector.png" alt="Vector" />
          </div>
        </div>
    )
}
export default Header;