import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import b_dot from "../assets/b-icon.svg";
import circle from "../assets/circle-icon.svg";
import hd from "../assets/hd-icon.svg";
import eye from "../assets/eye-icon.svg";
import fourk from "../assets/4k-icon.svg";
import warn from "../assets/warn-icon.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <nav className={styles.logo_desk}>
          <h2>basement</h2>
        </nav>
        <nav className={styles.logo_mobile}>
          <Image src={b_dot} height={60} width={60} />
        </nav>
      </div>

      <div className={styles.icons_container}>
        <Image src={circle} />
        <Image src={hd} />
        <Image src={eye} />
        <Image src={fourk} />
        <Image src={warn} />
      </div>

      <nav className={styles.cart}>
        <p>CART (0)</p>
      </nav>
    </div>
  );
};

export default Header;
