import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.site__footer}>
      <section
        className={styles.horizontal__footer__section}
        id={styles.footer__middle__section}
      >
        {/* Store locations sections column */}
        <div
          id={styles.footer__about}
          className={`${styles.footer__columns} ${styles.footer__columns__large}`}
        >
          <h1>Our Address</h1>
          <address>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />
              Manhattan New York, 10002
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />
              1 (800) 000–0000
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />
              noreply@100stliquor.io
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png" />
              8:00 AM – 10:30 PM
            </p>
          </address>
        </div>
        {/* Overview sections column */}
        <div className={styles.footer__columns}>
          <h1>Overview</h1>
          <ul className={styles.footer__column__menu} role="menu">
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Services
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Pricing
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Portfolio
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                News
              </a>
            </li>
          </ul>
        </div>
        {/* Resources column */}

        <div className={styles.footer__columns}>
          <h1>Resources</h1>
          <ul className={styles.footer__column__menu} role="menu">
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                FAQ
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Media
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Guides
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Free Resources
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        {/* Use of terms sections column */}
        <div className={styles.footer__columns}>
          <h1>Information</h1>
          <ul className={styles.footer__column__menu} role="menu">
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                About Us
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Terms of Use
              </a>
            </li>
            <li className={styles.footer__column__menu__item}>
              <a
                href="#"
                className={styles.footer__column__menu__item__link}
                role="menuitem"
              >
                Legal Information
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Message Us
              </a>
            </li>
            <li className={styles.footer__column__menu__item} role="menuitem">
              <a href="#" className={styles.footer__column__menu__item__link}>
                Leave a Feedback
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Social Media Icons */}

      <section
        className={styles.horizontal__footer__section}
        id={styles.footer__bottom__section}
      >
        <div id={styles.footer__copyright__info}>
          &copy; 100stliquor Inc. {new Date().getFullYear()}. All rights
          reserved.
        </div>
        <div id={styles.footer__social__buttons}>
          <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
          <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
          <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
          <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
