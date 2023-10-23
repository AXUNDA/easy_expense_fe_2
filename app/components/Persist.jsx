"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

const Persist = ({ children }) => {
  const router = useRouter();
  const token = Cookies.get("auth_token");

  if (token) {
    router.push("/dashboard");
  } else {
    return children;
  }
};

export default Persist;
