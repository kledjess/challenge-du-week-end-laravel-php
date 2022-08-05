import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/co-working/Hero";
import Fact from "../sections/co-working/Fact";
import Locations from "../sections/co-working/Locations";
import Content1 from "../sections/co-working/Content1";
import Feature from "../sections/co-working/Feature";
import Content2 from "../sections/co-working/Content2";
import CTA from "../sections/co-working/CTA";

const CoWorking = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Element name="elFact">
          <Fact />
        </Element>
        <Locations />
        <Content1 />
        <Feature />
        <Content2 />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default CoWorking;
