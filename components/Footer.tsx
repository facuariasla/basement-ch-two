import React from 'react'
import styles from '../styles/HomeTitles.module.scss'
import styles2 from '../styles/Footer.module.scss'
import vectorfooter from '../assets/vectorfooter.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.titles_container}>
      <div className={styles2.title_top_container}>
        <div className={styles2.image_container}>
          <Image src={vectorfooter} objectFit='contain'/>
        </div>
        <h1>WEAR</h1>
      </div>
      <div className={styles.title_bottom_container}>
        <h1>EVERYDAY</h1>
      </div>
    </footer>
  )
}

export default Footer