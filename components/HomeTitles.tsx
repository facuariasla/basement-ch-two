import Image from "next/image";
import React from "react";
import styles from "../styles/HomeTitles.module.scss";
import lasterisk from "../assets/leftasterisk.svg";
import rasterisk from "../assets/rigthasterisk.svg";

const HomeTitles = () => {
  return (
    <div>
      <div className={styles.titles_container}>
        <div className={styles.title_top_container}>
          <h1>BASEMENT</h1>
        </div>
        <div className={styles.title_bottom_container}>
          <div>
            <p>EST</p>
          </div>
          <h1>SUPLY</h1>
          <div>
            <p>2K22</p>
          </div>
        </div>
      </div>
      <div className={styles.asterisk_left}>
        <Image
          src={lasterisk}
          alt="floating asterisk"
          height={200}
          width={200}
        />
      </div>
      <div className={styles.asterisk_rigth}>
        <Image
          src={rasterisk}
          alt="floating asterisk"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default HomeTitles;
