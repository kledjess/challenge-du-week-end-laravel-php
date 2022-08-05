import React from "react";

import PageWrapper from "../../components/PageWrapper";
// import Hero from "../sections/ecommerce/Hero";
// // import Categories from "../sections/ecommerce/Categories";
// import Products from "../sections/ecommerce/Products";
// import Content from "../sections/ecommerce/Content";
// import Testimonial from "../sections/ecommerce/Testimonial";
// import CTA from "../sections/ecommerce/CTA";

import Loginform from "../../components/auth/Loginform";

const Login = () => {
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
        {/* <Categories /> */}
        {/* <Products /> */}
        <Loginform/>
        {/* <Testimonial /> */}
        {/* <CTA /> */}
      </PageWrapper>
    </>
  );
};

export default Login;
