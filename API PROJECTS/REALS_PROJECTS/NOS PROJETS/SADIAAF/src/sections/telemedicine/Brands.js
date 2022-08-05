import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="brand-section pt-13 pt-lg-17 pb-11 border-bottom bg-default-6">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md="8">
              <p className="gr-text-9 text-center mb-7 text-color-opacity">
                Trusted by over 4,000+ customers, some of them are here
              </p>
            </Col>
            <Col xs="12">
              <div className="brand-logos d-flex justify-content-center justify-content-xl-between align-items-center mx-n9 flex-wrap">
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                >
                  <img src={"/image/l4/png/l4-brand1.png"} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <img src={"/image/l4/png/l4-brand2.png"} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <img src={"/image/l4/png/l4-brand3.png"} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="600"
                >
                  <img src={"/image/l4/png/l4-brand4.png"} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <img src={"/image/l4/png/l4-brand6.png"} alt="" className="w-100" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Brands;
