"use client";
import React, { useState } from "react";

import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Checkbox, useToast, Spinner } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import api from "../components/api";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Persist from "../components/Persist";

const page = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.login({
        email,
        password,
      });
      console.log(res);
      Cookies.set("auth_token", res.token, {
        expires: 7,
      });
      setLoading(false);
      window.location.href = "/dashboard";

      // router.push("/dashboard");
    } catch (error) {
      setLoading(false);

      // sconsole.log(error.response.data.msg);
      toast({
        status: "error",
        title: `${error.response.data.msg}`,
        position: "top",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  return (
    <Persist>
      <div className={styles.login}>
        <form onSubmit={onSubmit}>
          <Image src={logo} />
          <h1>Login</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi</p>
          <div>
            <p>email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="test@test.com"
              required
            />
          </div>
          <div>
            <p>password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              required
            />
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
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            ) : (
              <button className={styles.loginButton} type="submit">
                Login
              </button>
            )}
          </section>
          <button>
            <FcGoogle /> Login with google
          </button>
        </form>
      </div>
    </Persist>
  );
};

export default page;
