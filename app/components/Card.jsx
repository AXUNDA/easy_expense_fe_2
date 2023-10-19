import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Card = ({ imageSrc, title, desc }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="image" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
