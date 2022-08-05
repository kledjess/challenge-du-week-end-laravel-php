import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/saas-subscription/Hero";
import Features from "../sections/saas-subscription/Features";
import Content1 from "../sections/saas-subscription/Content1";
import Fact from "../sections/saas-subscription/Fact";
import Content2 from "../sections/saas-subscription/Content2";
import Testimonial from "../sections/saas-subscription/Testimonial";
import Pricing from "../sections/saas-subscription/Pricing";
import Faq from "../sections/saas-subscription/Faq";
import CTA from "../sections/saas-subscription/CTA";

const SaasSubscription = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Features />
        <Content1 />
        <Fact />
        <Content2 />
        <Testimonial />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default SaasSubscription;
