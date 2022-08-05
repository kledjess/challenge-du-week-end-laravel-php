import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";
const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="hero-area-03 pt-29 pt-lg-32 pb-5 position-relative z-index-1"
        css={`
          background-image: linear-gradient(
            225deg,
            #7b11f9 0%,
            #7922d8 39%,
            #3636b2 100%
          );
        `}
      >
        <div
          className="shape-1 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <img src={"/image/l6/png/l6-hero-shape1.png"} alt="" />
        </div>
        <div
          className="shape-2 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <img src={"/image/l6/png/l6-hero-shape2.png"} alt="" />
        </div>
        <div
          className="shape-3 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src={"/image/l6/png/l6-hero-shape3.png"} alt="" />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="hero-content dark-mode-texts mb-15 mb-lg-30 text-center text-md-start ">
                <h1 className="gr-text-2 mb-8 text-white pe-xl-4">
                  Manage your remote team work
                </h1>
                <p className="gr-text-8 px-7 ps-md-0 pe-md-11 mb-0 gr-color-white-opacity-7">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within few
                  minutes.
                </p>
                <div className="hero-btns mt-11">
                  <Link to="/#" className="btn btn-red rounded-8 text-white gr-hover-y">
                    Explore more
                  </Link>
                </div>
                <div className="download-block mt-15">
                  <h3 className="download-title gr-text-12 text-uppercase text-white">
                    Download our app
                  </h3>
                  <div className="download-btns d-flex flex-column flex-xs-row justify-content-center justify-content-md-start mt-7">
                    <Link to="/#">
                      <img
                        src={"/image/l6/png/l6-download-appstore.png"}
                        alt=""
                        className="me-xs-5 mb-5 mb-xs-0"
                      />
                    </Link>
                    <Link to="/#">
                      <img src={"/image/l6/png/l6-download-gplay.png"} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <div
              className="col-md-9 col-lg-5 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="hero-img position-relative">
                <img
                  src={"/image/l6/png/l6-hero-img.png"}
                  alt=""
                  className="w-100 position-relative gr-z-index-1"
                />
                <div
                  className="abs-img"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                  css={`
                    z-index: initial;
                  `}
                >
                  <img src={"/image/l6/png/l6-hero-pattern.png"} alt="" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <div className="wave-shape">
          <img src={"/image/svg/l6-hero-wave.svg"} alt="" className="w-100 light-shape default-shape" />
          <img src={"/image/svg/l6-hero-wave-dark.svg"} alt="" className="w-100 dark-shape" />
        </div>
      </div>
    </>
  );
};

export default Hero;
