import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top  "
      style={{
        boxShadow: "none",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
        }}
      >
        <a
          className="navbar-brand me-2 nav-link"
          href="https://mdbgo.com/"
          // style={{
          //   color: "#4C4C4C",
          // }}
        >
          <Image src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu color="#6c63ff" />
          {/* <i className="fas fa-bars"></i> */}
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
          </ul>

          <div className="d-flex align-items-center nav-right">
            <a className={styles.signup} href="">
              signup
            </a>

            <a className={styles.login} href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
