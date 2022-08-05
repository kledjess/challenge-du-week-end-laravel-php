import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/video-conference/Hero";
import Rating from "../sections/video-conference/Rating";
import Content1 from "../sections/video-conference/Content1";
import Content2 from "../sections/video-conference/Content2";
import Content3 from "../sections/video-conference/Content3";
import Pricing from "../sections/video-conference/Pricing";

const VideoConference = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Rating />
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default VideoConference;
