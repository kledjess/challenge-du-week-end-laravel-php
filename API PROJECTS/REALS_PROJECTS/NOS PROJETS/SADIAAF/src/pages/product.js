import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/product-landing/Hero";
import Content1 from "../sections/product-landing/Content1";
import Content2 from "../sections/product-landing/Content2";
import Content3 from "../sections/product-landing/Content3";
import Pricing from "../sections/product-landing/Pricing";
import Cta from "../sections/product-landing/Cta";

const Product = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Buy now - Starting at $99",
        }}
        footerConfig={{
          theme: "light",
          style: "style4", //style1, style2
        }}
      >
        <Hero />
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
        <Cta />
      </PageWrapper>
    </>
  );
};

export default Product;
