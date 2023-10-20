import React from "react";
import introImage from "../assets/undraw_data_report_bi6l 1.png";
import Image from "next/image";
import styles from "./styles.module.css";

const Intro = () => {
  return (
    <div class="row mt-5 intro me-0 ms-0">
      <div className="col-md-6 col-lg-6 col-sm-12">
        <h1>Track and approve.</h1>
        <h1>business expenses easily</h1>
        <p>
          Easy Expense is an open-source tool designed to make it easier for
          small businesses to track and approve business expenses. It has a
          simple feature set focused on expense tracking, and is open-source, so
          that companies can run and self-host.
        </p>
        <a href="">
          signup <i class="fas fa-arrow-right-long"></i>
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-sm-12">
        <Image
          src={introImage}
          alt="introImage"
          className={styles.introImage}
        />
      </div>
    </div>
  );
};

export default Intro;
