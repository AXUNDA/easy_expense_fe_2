import React from "react";
import Container from "../components/Container";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Checkbox } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className={styles.login}>
      <form>
        <Image src={logo} />
        <h1>Login</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi</p>
        <div>
          <p>email</p>
          <input type="text" placeholder="test@test.com" />
        </div>
        <div>
          <p>password</p>
          <input type="password" placeholder="********" />
        </div>
        <section className="mt-2">
          <Checkbox colorScheme="yellow" size="sm">
            Remember Me
          </Checkbox>
          <a
            href=""
            style={{
              fontSize: "13px",
            }}
          >
            Forgotten Password?
          </a>
        </section>
        <section>
          <button className={styles.signup}>sign Up</button>
          <button className={styles.loginButton}>Login</button>
        </section>
        <button>
          <FcGoogle /> Login with google
        </button>
      </form>
    </div>
  );
};

export default page;
