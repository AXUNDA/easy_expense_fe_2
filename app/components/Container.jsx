import React from "react";
import styles from "./styles.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container} suppressHydrationWarning>
      {children}
    </div>
  );
};

export default Container;
