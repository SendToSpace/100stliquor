import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav__links}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/Wine">
                <a>Wine</a>
              </Link>
            </li>
            <li>
              <Link href="/AboutUs">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>Contact</button>
      </header>
    </div>
  );
};

export default NavBar;
