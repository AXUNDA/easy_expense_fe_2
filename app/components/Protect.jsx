"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Protect = ({ children }) => {
  const router = useRouter();
  const token = Cookies.get("auth_token");

  if (!token) {
    // window.location.href = "/login";
    router.push("/login");
  } else {
    return children;
  }
};

export default Protect;
