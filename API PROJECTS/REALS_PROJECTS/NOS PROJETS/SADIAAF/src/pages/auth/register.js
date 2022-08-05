import React from "react";
// import { register } from "react-scroll/modules/mixins/scroller";

import PageWrapper from "../../components/PageWrapper";
// import Hero from "../sections/ecommerce/Hero";

import Registerform from "../../components/auth/Registerform"

const Register = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "center",
          isFluid: true,
          button: "cart", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        {/* <Hero /> */}
        
        <Registerform />
       
      </PageWrapper>
    </>
  );
};

export default Register;
