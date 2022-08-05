import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mobile-app/Hero";
import Content1 from "../sections/mobile-app/Content1";
import Content2 from "../sections/mobile-app/Content2";
import Process from "../sections/mobile-app/Process";
import Video from "../sections/mobile-app/Video";
import Features from "../sections/mobile-app/Features";
import Testimonials from "../sections/mobile-app/Testimonials";
import Pricing from "../sections/mobile-app/Pricing";

const MobileApp = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          variant: "danger",
          isFluid: true,
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          style: "style3", //style1, style2
        }}
      >
        <Hero />
        <Content1 />
        <Content2 />
        <Process />
        <div className="gradient-sections-wrapper bg-gradient-1">
          <Video />
          <Features />
          <Testimonials />
        </div>
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default MobileApp;
