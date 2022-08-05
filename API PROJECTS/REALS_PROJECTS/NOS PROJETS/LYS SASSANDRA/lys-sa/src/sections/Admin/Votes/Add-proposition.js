// import React from "react";
import Link from "../../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";
import React, { useState } from "react";


const AddProposition = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      <PageWrapper>
      <div className="sign-page bg-default-2 px-0">
          <header className="site-header bg-white">
            <Container fluid>
              <Row className="justify-content-center">
                <Col md="8" lg="5" xl="4">
                  <div className="brand text-center py-9">
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
          <Container>
            <Row className="justify-content-center py-5">
              <Col lg="12">
                <div className="main-block">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-7 mb-9 heading-color">Espace administrateur</h2>
                    
                  </div>
                  <div className="bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                  <div className="price-content">
                            <div className="d-flex">
                                <div className="circle-32 pe-5">
                                <img src="/image/lysfc/admin/scrutin.jpg" alt="" width={40}/>
                                </div>
                                <div className="text">
                                    <p className="gr-text-10 text-blackish-blue">
                                        Quel joueur de LYS marquera le premier but de la rencontre LYS vs Stella Club d'Adjamé?
                                    </p>
                                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-3">
                                    Vous répondez correctement à cette question et repartez à avec 2 packs d'eau minérale Assinie et 2 packs de boissons Planet + 1 coupon de transport ELKA.
                                    </span>
                                    <Row className="justify-content-center align-items-center">
                                    <Col xs="12" md="3" lg="3"xl="3"  className="order-lg-1 mt-10"
                                        data-aos="fade-right"
                                        data-aos-duration="750"
                                        data-aos-delay="500"></Col>
                                    <Col
                                        xs="12"
                                        md="6"
                                        lg="6"
                                        xl="6"
                                        className="order-lg-1 mt-10"
                                        data-aos="fade-right"
                                        data-aos-duration="750"
                                        data-aos-delay="500"
                                        
                                    >
                                        <div className="hero-btn text-center ">
                                            <a
                                            className="nav-link btn btn-blue "
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            href="/admin/votes/scrutin" 
                                            >
                                                <p className="gr-text-8  mb-0 text-white">
                                                    Ajouter une proposition
                                                </p>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="3" lg="3"xl="3"  className="order-lg-1 mt-10"
                                        data-aos="fade-right"
                                        data-aos-duration="750"
                                        data-aos-delay="500"></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                  </div>

                    <p className="gr-text-8 mb-13 text-color-opacity text-center">
                    Liste des propositions de ce scrutin
                    </p>
                    <Row className="justify-content-center">
                    <Col lg="4" md="6" sm="10" className="mb-5">
                        <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pe-3 px-3 bg-white rounded-10">
                        <div className="price-content">
                            <div className="d-flex">
                                <div className="circle-32 pe-5">
                                <img src="/image/lysfc/admin/proposit.jpg" alt="" width={40}/>
                                </div>
                                <div className="text">
                                    <p className="gr-text-10 text-blackish-blue">
                                    Titi KONE Titi 
                                    </p>
                                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                                        Quel joueur de LYS marquera le premier but de la rencontre LYS vs Stella Club d'Adjamé?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="gr-text-10 text-blackish-blue mt-10">
                            Mlieu offensif, technique et habille.
                        </p>
                        
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="10" className="mb-5">
                        <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pe-3 px-3 bg-white rounded-10">
                        <div className="price-content">
                            <div className="d-flex">
                                <div className="circle-32 pe-5">
                                <img src="/image/lysfc/admin/proposit.jpg" alt="" width={40}/>
                                </div>
                                <div className="text">
                                    <p className="gr-text-10 text-blackish-blue">
                                    Titi KONE Titi 
                                    </p>
                                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                                        Quel joueur de LYS marquera le premier but de la rencontre LYS vs Stella Club d'Adjamé?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="gr-text-10 text-blackish-blue mt-10">
                            Mlieu offensif, technique et habille.
                        </p>
                        
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="10" className="mb-5">
                        <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pe-3 px-3 bg-white rounded-10">
                        <div className="price-content">
                            <div className="d-flex">
                                <div className="circle-32 pe-5">
                                <img src="/image/lysfc/admin/proposit.jpg" alt="" width={40}/>
                                </div>
                                <div className="text">
                                    <p className="gr-text-10 text-blackish-blue">
                                    Titi KONE Titi 
                                    </p>
                                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                                        Quel joueur de LYS marquera le premier but de la rencontre LYS vs Stella Club d'Adjamé?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="gr-text-10 text-blackish-blue mt-10">
                            Mlieu offensif, technique et habille.
                        </p>
                        
                        </div>
                    </Col>
                    
                    </Row>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        
      </PageWrapper>
    </>
  );
};
export default AddProposition;
