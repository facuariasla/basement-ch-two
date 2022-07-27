import React from 'react'
import styles from '../styles/Layout.module.scss'
import AnimatedDivider from './AnimatedDivider'
import Footer from './Footer'
import Header from './Header'
import HomeProducts from './HomeProducts'
import HomeTitles from './HomeTitles'

const Layout = () => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.layout}>
        {/* LAYOUT CONTAINER */}
        <Header/>
        <HomeTitles/>
        <AnimatedDivider/>
        <HomeProducts/>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout