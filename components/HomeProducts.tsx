import Image from "next/image";
import React, { useEffect } from "react";
import useStore from "../state_zustand";
import styles from "../styles/Products.module.scss";
import addImg from "../assets/addtocart.svg";

const HomeProducts = () => {
  const setCartItem = useStore((state: any) => state.setCartItem);
  const setCartDetails = useStore((state: any) => state.setCartDetails);
  const cart = useStore((state:any) => state.cart);
  const setTotalPrice = useStore((state:any) => state.setTotalPrice);
  const setCartQuantity = useStore((state:any) => state.setCartQuantity);

  const handleAddItem = (data: any) => {
    console.log(data);
    setCartItem(data);
  };

  useEffect(() => {
    setCartDetails();
    setTotalPrice();
    setCartQuantity()
  }, [cart]);

  const inventory = useStore((state: any) => state.inventory);
  return (
    <section className={styles.products_container}>
      <div className={styles.products}>
        {/* CARDS */}
        {inventory?.map((item: any) => (
          <div key={item.id} className={styles.product_card}>
            <div
              className={styles.image_container}
              onClick={() => handleAddItem(item)}
            >
              <Image
                src={item.image}
                width={220}
                height={280}
                objectFit="cover"
              />
              <div className={styles.addtocart}>
                <Image src={addImg} />
              </div>
            </div>
            <div className={styles.card_data}>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProducts;
