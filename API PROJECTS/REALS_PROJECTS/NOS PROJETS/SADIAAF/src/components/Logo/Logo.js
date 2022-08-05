import React from "react";
import Link from "next/link";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img src={"/image/logo-main-white.png"} alt="" />
        ) : (
          <img src={"/image/logo-main-black.png"} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
