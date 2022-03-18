import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink2 = ({ href, name, as, children, linkClass }) => {
  const router = useRouter();
  console.log(router.asPath);
  console.log(router.pathname);
  console.log(href);
  const style = {
    // backgroundColor:  router.pathname.startsWith('/setting')
    //   ? "rgba(255, 255, 255, 0.3)"
    //   : "",

    // fontSize: router.pathname === href ? "50px" : "",
    // fontFamily: router.pathname === href ? "Proxima-Medium" : "Proxima-Regular",
    backgroundColor:
      router.pathname.slice(0, 8) == href.slice(0, 8)
        ? "rgba(255, 255, 255, 0.3)"
        : "",
    // backgroundColor: router.pathname === href ? "rgba(255, 255, 255, 0.3)" : "",
    color: router.pathname.slice(0, 8) == href.slice(0, 8) ? " #004EF0" : "",
    // color: router.pathname === href ? " #004EF0" : "",
    borderRight:
      router.pathname.slice(0, 8) == href.slice(0, 8) ? "solid #fff 5px" : "",
    // borderRight: router.pathname === href ? "solid #fff 5px" : "",
    borderRadius: router.pathname.slice(0, 8) == href.slice(0, 8) ? "5px" : "",
    // borderRadius: router.pathname === href ? "5px" : "",
  };

  return (
    <>
      <Link href={href} as={as}>
        <a style={style} className={linkClass}>
          {name} {children}
        </a>
      </Link>
    </>
  );
};

export default ActiveLink2;
