import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

// Connexion à MetaMask
// import { Injected } from "../../Wallet/Connector";
// import {useWeb3React} from '@web3-react/core';



const InfosUser = () => {

    const [userDataSession, setUserDataSession] = useState()

    // Variables de connexion à MetaMask
    // const {active, account, library, connector, activate, deactivate} = useWeb3React()

  // Bouton connexion à MetaMask
  async function connect(){
    try{
      await activate(Injected)
    } catch (ex) {
      console.log(ex)
    }
  }
  // Bouton deconnection à MetaMask
  async function disconnect(){
    try{
      await deactivate(Injected)
    } catch (ex) {
      console.log(ex)
    }
  }

    // Obtenir mes infos
    useEffect(async() => {
        const token = localStorage.getItem('tokenEnCours')
        console.log("token me",token)
        
            const getMeSession = async () => {
            const res = await fetch('http://localhost:3080/api/user', {
              // const res = await fetch("https://api.stablecoin.wealthtechinnovations.com/api/user/session", {

                headers: {
                'Content-Type': 'application/json',
                Authorization:  `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((userDataSession) => {
                setUserDataSession(userDataSession)
               
                }) 

                
            };
            
            getMeSession();
            
            if (typeof window !== 'undefined') {
              // setter
              localStorage.setItem('infosUser', userDataSession);
              var monobjet_jsonR = localStorage.getItem("infosUser");
              console.log("monobjetR",monobjet_jsonR );
              }
    }, []);
    // Fin
  console.log(userDataSession)
  
  
 
 

  return (
    <>
      {/* <!-- Hero Area --> */}
      
      <div className="position-relative  pt-10 pt-lg-23 pb-15 pb-lg-27">
        <Container>
        {/* Le Bouton Connectez votre Wallet */}
        {/* <Row className="justify-content-center "> */}
            {/* <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2 my-3"
            >
                
                <div className="hero-btn text-center">
                  <Button className="gr-hover-y btn-sm" onClick={connect} >
                    Connectez votre Wallet
                  </Button>
                </div>
                
            </Col> */}
            {/* Fin */}
            
            {/* Le Bouton Obtenir des jeton Dev */}
            {/* <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2 my-3"
            >
                <div className="hero-btn text-center">
                  <Button href="#" className="gr-hover-y btn-sm" >
                    Obtenir des jeton Dev
                  </Button>
                </div>
            </Col> */}
            {/* Fin */}

        {/* </Row> */}
        
            <Row className="justify-content-center align-items-center">
           
            <Col
              xs="12"
              md="3"
              lg="3"
              xl="3"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content mt-11 mt-lg-0">
              {/*Sidebar */}
            <div >
                <div className="mb-auto">
                <br/><br/>
                  <h5 className="text-center">Ma photo</h5>
                    <div
                      
                      className="feature-widget focus-reset bg-white d-flex flex-column min-height-px-200 border rounded-10 pt-8 pb-8 ps-7 mx-6 ps-lg-9 pe-md-8 pe-lg-10 gr-hover-shadow-1"
                    >
                        
                        <img className="w-100" src={"/image/lysfc/profil/avatar2.png"} alt="" />
                    </div>
                   <div className="row">
                   <form className="my-3 ">
                        <div className="hero-btn my-3 row">
                        <input type="file" accept="image/*" className="gr-text-11 " />
                            <button href="#" className=" my-3 btn btn-success btn-sm" >
                                Changer
                            </button>
                        </div>
                    </form>
                   </div>
                </div>
            </div>
            {/* Fin Sidebar*/}
              </div>
            </Col>
            <Col
              xs="9"
              md="7"
              lg="7"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img position-relative"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                  <br/> <br/>
                <div className="md-mx-15">
                <h5 className=" ">Infos personnelles</h5>

                <p className="gr-text-8  pe-md-12 text-color-opacity">
                    Nom : <b>{userDataSession?.firstName}</b>
                </p>
                <p className="gr-text-8  pe-md-12 text-color-opacity">
                    Prénom :<b>{userDataSession?.lastName}</b>
                </p>
                <p className="gr-text-8  pe-md-12 text-color-opacity">
                    Contact : <b>{userDataSession?.mobile}</b>
                </p>
                {/* <p className="gr-text-8  pe-md-12 text-color-opacity">
                    Pays : <b>{userDataSession?.pays}</b>
                </p> */}
                <p className="gr-text-8 pe-md-12 text-color-opacity">
                Email : <b>{userDataSession?.email}</b>
                </p>
                </div>

                <div
                  className="gr-abs-tl gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src="" alt="" />
                </div>
              </div>
            </Col>
            </Row><br/><br/><br/>

            <div className="hero-btn text-center ">
                <button type="button" href="#" className="btn btn-outline-secondary">Mettre à jour votre profil</button>
            </div>
        </Container>
      </div>
    </>
  );
};

export default InfosUser;
