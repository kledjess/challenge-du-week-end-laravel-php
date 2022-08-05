import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/telemedicine/Hero";
import Brands from "../sections/telemedicine/Brands";
import Features from "../sections/telemedicine/Features";
import Content1 from "../sections/telemedicine/Content1";
import Content2 from "../sections/telemedicine/Content2";
import Team from "../sections/telemedicine/Team";
import Content3 from "../sections/telemedicine/Content3";
import CTA from "../sections/telemedicine/CTA";

const Telemedicine = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "left",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brands />
        <Features />
        <Content1 />
        <Content2 />
        <Team />
        <Content3 />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Telemedicine;
