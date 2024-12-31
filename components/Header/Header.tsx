import React, { useState } from "react";
import styles from "./styles.module.css";
import BurgerBtn from "../../assets/img/burger-btn.svg";

const Header = () => {
  const [isBurgerButtonClicked, setBurgerButtonClicked] = useState(false);

  const navbar = (
    <nav>
      <ul>
        <li>
          <a href="#">Main</a>
        </li>
        <li>
          <a href="/insert">Insert</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>To do app</div>

      <nav className={styles.desktopNav}>{navbar}</nav>

      <button onClick={() => setBurgerButtonClicked(!isBurgerButtonClicked)}>
        <img src={BurgerBtn.src} alt="burger btn" />
      </button>

      <div
        className={`${styles.overlay}  ${
          isBurgerButtonClicked && styles.overlayOpen
        }`}
      >
        <nav className={styles.mobileNav}>{navbar} </nav>
      </div>
    </div>
  );
};
export default Header;
