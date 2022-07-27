import Image from "next/image";
import React from "react";
import useStore from "../state_zustand";
import styles from "../styles/Products.module.scss";
import addImg from "../assets/addtocart.svg";

const HomeProducts = () => {
  const inventory = useStore((state: any) => state.inventory);
  return (
    <section className={styles.products_container}>
      <div className={styles.products}>
        {/* CARDS */}
        {inventory?.map((item: any) => (
          <div key={item.id} className={styles.product_card}>
            <div className={styles.image_container}>
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
