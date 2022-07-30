import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import b_dot from "../assets/b-icon.svg";
import circle from "../assets/circle-icon.svg";
import hd from "../assets/hd-icon.svg";
import eye from "../assets/eye-icon.svg";
import fourk from "../assets/4k-icon.svg";
import warn from "../assets/warn-icon.svg";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <nav className={styles.logo_desk}>
          <a href='https://basement.studio/' target='_blank' rel="noopener noreferrer">
            <h2>basement</h2>
          </a>
        </nav>
        <nav className={styles.logo_mobile}>
        <a href='https://basement.studio/' target='_blank' rel="noopener noreferrer">

          <Image src={b_dot} height={60} width={60} alt='dot icon'/>
          </a>

        </nav>
      </div>

      <div className={styles.icons_container}>
        <Image src={circle} alt='icon'/>
        <Image src={hd} alt='icon'/>
        <Image src={eye} alt='icon'/>
        <Image src={fourk} alt='icon'/>
        <Image src={warn} alt='icon'/>
      </div>

      {/* <nav className={styles.cart}>
        <p>CART (0)</p>
      </nav> */}
      <Cart/>
    </div>
  );
};

export default Header;
