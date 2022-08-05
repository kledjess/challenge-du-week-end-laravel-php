import React from "react";
import PageWrapper from "../../../components/PageWrapper";
import SideBar from "../../../sections/Profil/SideBar";
import FormScrutin from "../../../sections/Admin/Votes/FormScrutin";

const indexFormScrutin= () => {
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
        <div className="row col-lg-12 col-md-12 ">
            <div className="row col-lg-3 col-md-3">
                <SideBar />
            </div>
            <div className="row col-lg-9 col-md-9 mt-5">
                <FormScrutin />
            </div>
        </div>  
      </PageWrapper>
    </>
  );
};

export default indexFormScrutin;
