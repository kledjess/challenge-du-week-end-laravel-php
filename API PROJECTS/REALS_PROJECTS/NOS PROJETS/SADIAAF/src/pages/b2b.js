import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/b2b/Hero";
import Alert from "../sections/b2b/Alert";
import Content1 from "../sections/b2b/Content1";
import Services from "../sections/b2b/Services";
import Content2 from "../sections/b2b/Content2";
import Video from "../sections/b2b/Video";
import Testimonials from "../sections/b2b/Testimonials";
import CTA from "../sections/b2b/CTA";

const B2B = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Get A Free Quote",
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Alert />
        <Content1 />
        <Services />
        <Content2 />
        <Video />
        <Testimonials />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default B2B;
