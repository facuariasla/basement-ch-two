import React from 'react'
import styles from '../styles/HomeTitles.module.scss'

const HomeTitles = () => {
  return (
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
  )
}

export default HomeTitles