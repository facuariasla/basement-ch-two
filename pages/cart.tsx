import React from 'react'
import styles from '../styles/Cart.module.scss'

const cart = () => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart}>
        <div className={styles.cart_top}>
          <div className={styles.close}><p>→ CLOSE</p></div>

          <div className={styles.cart_title}>
            <h1>YOUR</h1>
            <h1 className={styles.title_bottom}>CART</h1>
          </div>

          <div className={styles.cards_container}>
            {/* Aca va un MAP */}
            <div className={styles.card_item}>
              <div className={styles.image_container}>
                <p>IMAGE</p>
              </div>

              <div className={styles.card_data}>
                <div className={styles.card_data_titles}>
                  <h2>BLACK T-SHIRT</h2>
                  <p>Unisex Basic Softstyle T-Shirt</p>
                </div>

                <div className={styles.bottom_card}>
                  <div className={styles.quantity}>
                    <p>QUANTITY:</p>
                    <div className={styles.quantity_counter}>
                      <p className={styles.btns}>-</p>
                      <p>3</p>
                      <p className={styles.btns}>+</p>
                    </div>
                  </div>
                  <div className={styles.size_price}>
                    <div className={styles.sizes}>
                      <p>SIZE:</p>
                      <div className={styles.sizes_options}>
                        <span><p>S</p></span>
                        <span><p>M</p></span>
                        <span><p>L</p></span>
                        <span><p>XL</p></span>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <p>$12.5</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          
          {/* End MAP */}
          </div>
        </div>

        <div className={styles.cart_bottom}>
          <div className={styles.total_price}>
            <p>TOTAL:</p>
            <p>$37.50</p>
          </div>
          <div className={styles.checkout}>
            <h1>CHECKOUT</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart