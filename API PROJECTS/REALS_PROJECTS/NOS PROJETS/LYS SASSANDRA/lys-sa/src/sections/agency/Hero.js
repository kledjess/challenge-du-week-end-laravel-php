import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative bg-default-2 bg-pattern pattern-2 pt-27 pt-lg-32 pb-15 pb-lg-27">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img position-relative"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                {/* <img className="w-100" src={"/image/l5/png/l5-hero-img.png"} alt="" /> */}
                <img className="rounded-circle w-100"   src={"/image/lysfc/club/lys5.jpg"}  alt="" />

                <div
                  className="gr-abs-tl gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src={"/image/l5/png/l5-dot-shape.png"} alt="" />
                </div>
              </div>
            </Col>
            <Col
              xs="11"
              md="9"
              lg="7"
              xl="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content mt-11 mt-lg-0">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  LYSFC
                </h4>
                <h1 className="title gr-text-2 mb-8 heading-color">
                  Fan token Lys Sassandra FC.
                </h1>
                <p className="gr-text-8 mb-11 pe-md-12 text-color-opacity">
                La blockchain pour susciter l'engagement des supporters.
les Fans Tokens offrent à leurs détenteurs la possibilité de voter pour des décisions secondaires concernant leur équipe. Ils permettent également d'accéder à des récompenses et à des expériences inoubliables proposées par le club ou par les partenaires des clubs.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
