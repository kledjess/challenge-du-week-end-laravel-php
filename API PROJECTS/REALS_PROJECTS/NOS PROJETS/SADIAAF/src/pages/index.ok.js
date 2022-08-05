import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/agency/Hero";
import Services from "../sections/agency/Services";
import Testimonial1 from "../sections/agency/Testimonial1";
import Content1 from "../sections/agency/Content1";
import Fact from "../sections/agency/Fact";
import Feature from "../sections/agency/Feature";
import CTA1 from "../sections/agency/CTA1";
import CaseStudies from "../sections/agency/CaseStudies";
import Testimonial2 from "../sections/agency/Testimonial2";
import CTA2 from "../sections/agency/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Testimonial1 />
        <Content1 />
        <Fact />
        <Feature />
        <CTA1 />
        <CaseStudies />
        <Testimonial2 />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
