import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/consultation/Hero";
import Fact from "../sections/consultation/Fact";
import Services from "../sections/consultation/Services";
import Content from "../sections/consultation/Content";
import Alert from "../sections/consultation/Alert";
import Testimonial from "../sections/consultation/Testimonial";
import CTA from "../sections/consultation/CTA";
import Newsletter from "../sections/consultation/Newsletter";

const Consultation = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "left",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Get started free",
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        <Hero />
        <Fact />
        <Services />
        <Content />
        <Alert />
        <Testimonial />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
