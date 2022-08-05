import React from "react";
// import { register } from "react-scroll/modules/mixins/scroller";

import PageWrapper from "../../../components/PageWrapper";
// import Hero from "../sections/ecommerce/Hero";

// import Registerform from "../../sections/Auth/Registerform"

const Activated = () => {
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
        
        <div className='row col-lg-12 col-md-12 my-20'>
            <div className='col-lg-3 col-md-12 '></div>
            <div className='col-lg-6 col-md-12 text-center card  mx-5 my-5'>
                <div className='login-form'>
                <h2 className='text-center '><b>Confirmez votre e-mail</b></h2>
                <hr/>
                <h5>Pour finaliser l'ouverture de votre compte, 
                    merci de confirmer votre e-mail à travers le mail envoyé à l'instant
                </h5>
                </div>
            </div>
            <div className='col-lg-3 col-md-12'></div>
        </div>

      </PageWrapper>
    </>
  );
};

export default Activated;
