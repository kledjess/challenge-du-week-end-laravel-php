import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center ">
            <Col md="9" lg="7" xl="6" className="">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3 ">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                 <i> Lys Sassandra FC</i>
                </h4>
                <h2 className="title gr-text-4 heading-color">
                Pourquoi acheter des Fan Tokens {" "}
                  <br className="d-none d-lg-block" /> du Lys Sassandra FC ?
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-green ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/micro.jpg"} width={100} className="rounded-circle" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-16 text-white">INFLUENCER LES DÉCISIONS DU CLUB</h3>
              </div>
            </Col>
            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-blue ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/trophe1.jpg"} width={100} className="rounded-circle" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-13 text-white">GAGNER DES RÉCOMPENSES & EXPÉRIENCES VIP</h3>
              </div>
            </Col>
            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-green ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/echange2.jpg"} width={100}  className="rounded-circle bg-white" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-16 text-white">ÉCHANGER DES RÉCOMPENSES POUR LES FANS</h3>
              </div>
            </Col>


            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-red ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/promo4.jpg"} width={110}  className="rounded-circle bg-white" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-20 mt-6 text-white">PROMOTIONS EXCLUSIVES</h3>
              </div>
            </Col>
            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-green ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/foot2.jpg"} width={100}  className="rounded-circle bg-white" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-6 text-white">DEVINER LES RÉSULTATS DES MATCHS AVEC LE PRONOSTIQUEUR</h3>
              </div>
            </Col>
            <Col
              md="6"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-5 px-9 pb-5 dark-mode-texts bg-blue ">
                <div className="card-img mb-11">
                  <img src={"/image/lysfc/pourquoi/jeux1.jpg"} width={100}  className="rounded-circle bg-white" alt="..." />
                </div>
                <h3 className="card-title gr-text-12 mb-19 text-white">JEUX, QUIZ ET ENCORE PLUS</h3>
              </div>
            </Col>





            {/* <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-blue h-100">
                <div className="card-img mb-11">
                  <img src={"/image/l5/png/l5-service-card2.png"} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">Web Development</h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <a
                  href="/#"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right fw-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img src={"/image/l5/png/l5-service-card3.png"} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">Content Writing</h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <a
                  href="/#"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right fw-bold"></i>
                </a>
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img src={"/image/l5/png/l5-dot-shape2.png"} alt="" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
