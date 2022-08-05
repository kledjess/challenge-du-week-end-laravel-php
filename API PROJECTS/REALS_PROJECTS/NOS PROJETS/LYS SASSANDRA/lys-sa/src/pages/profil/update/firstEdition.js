import React from "react";
import FirstEdition from "../../../sections/Profil/Update/FirstEdition";

import PageWrapper from "../../../components/PageWrapper";


const FirstUpdate = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "center",
          isFluid: true,
          button: "cart", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        {/* <Hero /> */}
        
        <FirstEdition />
       
      </PageWrapper>
    </>
  );
};

export default FirstUpdate;
