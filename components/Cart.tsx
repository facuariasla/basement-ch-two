import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.scss";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
} from "framer-motion";
import useStore from "../state_zustand";
import Image from "next/image";

const Cart = () => {
  const [selectedCart, setSelectedCart] = useState<boolean>(false);
  const cart = useStore((state: any) => state.cart);
  const cartQuantity = useStore((state: any) => state.cartQuantity);
  const cleanCart = useStore((state: any) => state.cleanCart);
  const cartDetails = useStore((state: any) => state.cartDetails);

  return (
    <LayoutGroup>
      <div className={styles.cart_btn} onClick={() => setSelectedCart(true)}>
        <p>CART ({cartQuantity})</p>
      </div>
      <AnimatePresence>
        {selectedCart && (
          <motion.div
            key="backdrop"
            className={styles.cart_container}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div>
              <div className={styles.cart}>
                <div className={styles.cart_top}>
                  <div className={styles.close}>
                    <p onClick={() => setSelectedCart(false)}>→ CLOSE</p>
                  </div>

                  <div className={styles.cart_title}>
                    <h1>YOUR</h1>
                    <h1 className={styles.title_bottom}>CART</h1>
                  </div>

                  <div className={styles.cards_container}>
                    {/* Aca va un MAP */}
                    {cartDetails?.length > 0
                      ? cartDetails.map((el: any) => (
                          <div key={el.id} className={styles.card_item}>
                            <div className={styles.image_container}>
                              <Image src={el.image} objectFit="cover" />
                            </div>

                            <div className={styles.card_data}>
                              <div className={styles.card_data_titles}>
                                <h2>{el.title}</h2>
                                <p>{el.description}</p>
                              </div>

                              <div className={styles.bottom_card}>
                                <div className={styles.quantity}>
                                  <p>QUANTITY:</p>
                                  <div className={styles.quantity_counter}>
                                    <p className={styles.btns}>-</p>
                                    <p>{cart[el.id]}</p>
                                    <p className={styles.btns}>+</p>
                                  </div>
                                </div>
                                <div className={styles.size_price}>
                                  <div className={styles.sizes}>
                                    <p>SIZE:</p>
                                    <div className={styles.sizes_options}>
                                      <span>
                                        <p>S</p>
                                      </span>
                                      <span>
                                        <p>M</p>
                                      </span>
                                      <span>
                                        <p>L</p>
                                      </span>
                                      <span>
                                        <p>XL</p>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={styles.price}>
                                    <p>${el.price}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : ""}

                    {/* End MAP */}
                  </div>
                  {cartQuantity > 0 ? (
                    <p
                      onClick={() => cleanCart()}
                      style={{
                        padding: "10px 0 0 0",
                        margin: "0",
                        cursor: "pointer",
                      }}
                    >
                      Clean cart
                    </p>
                  ) : (
                    ""
                  )}
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
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default Cart;
