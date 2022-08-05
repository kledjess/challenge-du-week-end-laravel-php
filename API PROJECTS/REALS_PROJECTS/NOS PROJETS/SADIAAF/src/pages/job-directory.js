import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/job-directory/Hero";
import Brand from "../sections/job-directory/Brand";
import Category from "../sections/job-directory/Category";
import Content from "../sections/job-directory/Content";
import Jobs from "../sections/job-directory/Job";
import News from "../sections/job-directory/News";
import Newsletter from "../sections/job-directory/Newsletter";

const JobDirectory = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brand />
        <Category />
        <Content />
        <Jobs />
        <News />
        <Newsletter />
      </PageWrapper>
    </>
  );
};
export default JobDirectory;
