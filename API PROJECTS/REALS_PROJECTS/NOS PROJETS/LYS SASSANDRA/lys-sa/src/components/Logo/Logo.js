import React from "react";
import Link from "next/link";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img src={"/image/lysfc/logo/logo3.jpg"} width={'100'} alt="" />
        ) : (
          <img src={"/image/lysfc/logo/logo3.jpg"} width={'50'} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
