"use client";

// import { useEffect, useLayoutEffect } from "react";
// import { redirect } from "next/navigation";
// import Cookies from "js-cookie";

// export default function IsAuth(Component) {
//   return function IsAuth(props) {
//     const auth = Cookies.get("auth_token");

//     useEffect(() => {
//       if (!auth) {
//         return redirect("/login");
//       }
//     }, []);

//     if (!auth) {
//       return null;
//     }

//     return <Component {...props} />;
//   };
// }

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

export default function IsAuth(Component) {
  return function IsAuth(props) {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const auth = Cookies.get("auth_token");
      if (auth) {
        setAuthenticated(true);
      } else {
        redirect("/login");
      }
    }, []);

    if (!authenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
