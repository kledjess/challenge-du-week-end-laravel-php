import React from "react";
import PageWrapper from "../../../components/PageWrapper";
import SideBar from "../../../sections/Profil/SideBar";
import Voter from "../../../sections/Profil/Votes/Voter";

const voter= () => {
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
                <Voter />
            </div>
        </div>  
      </PageWrapper>
    </>
  );
};

export default voter;
