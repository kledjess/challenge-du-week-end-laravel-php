import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/web-application/Hero";
import Brands from "../sections/web-application/Brands";
import Features from "../sections/web-application/Features";
import Content1 from "../sections/web-application/Content1";
import Content2 from "../sections/web-application/Content2";
import Content3 from "../sections/web-application/Content3";
import Pricing from "../sections/web-application/Pricing";
import Testimonial from "../sections/web-application/Testimonial";

const WebApplication = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "cta", // cta, account, null
          buttonText: "Start a free trial",
        }}
        footerConfig={{
          theme: "dark",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brands />
        <Features />
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
        <Testimonial />
      </PageWrapper>
    </>
  );
};

export default WebApplication;
