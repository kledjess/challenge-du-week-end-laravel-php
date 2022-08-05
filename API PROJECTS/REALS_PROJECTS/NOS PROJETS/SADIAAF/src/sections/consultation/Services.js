import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section pt-12 pb-7 pb-lg-25 pt-lg-19">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7 heading-color">
                  Services we offer for you
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={"/image/l2/jpg/l2-service-img1.jpg"}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link
                    to="/#"
                    className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0 heading-color"
                  >
                    Digital Marketing{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={"/image/l2/jpg/l2-service-img2.jpg"}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link
                    to="/#"
                    className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0 heading-color"
                  >
                    Content Writing{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={"/image/l2/jpg/l2-service-img3.jpg"}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link
                    to="/#"
                    className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0 heading-color"
                  >
                    Graphic Design{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={"/image/l2/jpg/l2-service-img4.jpg"}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link
                    to="/#"
                    className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0 heading-color"
                  >
                    SEO for Business{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
