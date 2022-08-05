import React from "react";
import Link from "../../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";

const FormScrutin = () => {
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
                    <p className="gr-text-8 mb-13 text-color-opacity">
                      Nouveau scrutin
                    </p>
                  </div>
                  <div className="bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    <form action="./">
                        <Row className="justify-content-center align-items-center">
                            <Col
                                xs="12"
                                md="6"
                                lg="6"
                                xl="6"
                                className="order-lg-1 mb-5"
                                data-aos="fade-right"
                                data-aos-duration="750"
                                data-aos-delay="500"
                            >
                                <div className="form-group mb-6">
                                    <label
                                    htmlFor="libelle"
                                    className="gr-text-11 fw-bold text-blackish-blue"
                                    >
                                    Libellé
                                    </label>
                                    <input
                                    className="form-control gr-text-11 border mt-3 bg-white"
                                    type="text"
                                    id="libelle"
                                    placeholder=""
                                    />
                                </div>
                            </Col>

                            <Col
                                xs="12"
                                md="6"
                                lg="6"
                                xl="6"
                                className="order-lg-1 mb-5"
                                data-aos="fade-right"
                                data-aos-duration="750"
                                data-aos-delay="500"
                            >
                                <div className="form-group mb-6">
                                    <label
                                    htmlFor="periode"
                                    className="gr-text-11 fw-bold text-blackish-blue"
                                    >
                                    Période
                                    </label>
                                    <input
                                    className="form-control gr-text-11 border mt-3 bg-white"
                                    type="datetime"
                                    id="periode"
                                    placeholder=""
                                    />
                                </div>
                            </Col>
                            <Col
                                xs="12"
                                md="6"
                                lg="6"
                                xl="6"
                                className="order-lg-1 mb-5"
                                data-aos="fade-right"
                                data-aos-duration="750"
                                data-aos-delay="500"
                            >
                                <div className="form-group mb-6">
                                    <label
                                    htmlFor="nombre"
                                    className="gr-text-11 fw-bold text-blackish-blue"
                                    >
                                    Nombre minimum de lysfc
                                    </label>
                                    <input
                                    className="form-control gr-text-11 border mt-3 bg-white"
                                    type="number"
                                    id="nombre"
                                    placeholder=""
                                    />
                                </div>
                            </Col>
                            <Col
                                xs="12"
                                md="6"
                                lg="6"
                                xl="6"
                                className="order-lg-1 mb-5"
                                data-aos="fade-right"
                                data-aos-duration="750"
                                data-aos-delay="500"
                            >
                                <div className="form-group mb-6">
                                    <label
                                    htmlFor="picture"
                                    className="gr-text-11 fw-bold text-blackish-blue"
                                    >
                                    photo
                                    </label>
                                    <input
                                    className="form-control gr-text-11 border mt-3 bg-white"
                                    type="file"
                                    id="picture"
                                    placeholder=""
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Col
                            xs="12"
                            md="12"
                            lg="12"
                            xl="12"
                            className="order-lg-1 mb-5"
                            data-aos="fade-right"
                            data-aos-duration="750"
                            data-aos-delay="500"
                        >
                            <div className="form-group mb-6">
                                <label
                                htmlFor="description"
                                className="gr-text-11 fw-bold text-blackish-blue"
                                >
                                Description
                                </label>
                                <textarea
                                className="form-control gr-text-11 border mt-3 bg-white"
                                type="text"
                                id="description"
                                placeholder=""
                                />
                            </div>
                        </Col>
                        <div className="form-group  mb-7 ">
                        <label
                          htmlFor="terms-check"
                          className="gr-check-input mb-7 d-flex"
                        >
                          <input
                            className="d-none "
                            type="checkbox"
                            id="terms-check"
                          />
                          <span className="checkbox mt-1 me-2"></span>
                          <p className="gr-text-11 text-blackish-blue mb-0 text-center">
                            Faire valoir la portion de Fan-Token
                          </p>
                        </label>
                    </div>

                    <Row className="justify-content-center align-items-center">
                        <Col
                            xs="12"
                            md="6"
                            lg="6"
                            xl="6"
                            className="order-lg-1 mb-5"
                            data-aos="fade-right"
                            data-aos-duration="750"
                            data-aos-delay="500"
                        >
                            <div className="hero-btn text-center ">
                            <a
                            className="nav-link btn btn-outline-red"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="/admin/votes/scrutin" 
                            >
                            <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Annuler
                            </p>
                            </a>

                        
                        </div>
                        </Col>

                        <Col
                            xs="12"
                            md="6"
                            lg="6"
                            xl="6"
                            className="order-lg-1 mb-5"
                            data-aos="fade-right"
                            data-aos-duration="750"
                            data-aos-delay="500"
                        >
                            <div className="hero-btn text-center ">
                            


                            <a
                            className="nav-link btn btn-outline-blue"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="/admin/votes/scrutin" 
                            >
                            <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Sauvegarder
                            </p>
                            </a>

                        
                        </div>
                        </Col>
                    </Row>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default FormScrutin;
