import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Brand = () => (
  <>
    {/* <!-- Brand section --> */}
    <div className="brand-section pt-11 pb-9 pt-lg-24 pb-lg-24 bg-default-6 ">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="10" lg="9" xl="8">
            <div className="section-title text-center mb-7 mb-lg-11">
              <h2 className="title heading-color gr-text-4 mb-9">Big companies are here</h2>
              <p className="gr-text-8 text-color-opacity px-lg-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
                You have a business to run. Stop worring about cross-browser
                bugs, designing new pages.
              </p>
            </div>
          </Col>
          <Col xs="12" md="11" lg="10" xl="9">
            <div className="brand-logos d-flex justify-content-center align-items-center mx-n9 flex-wrap">
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="500"
              >
                <img src={"/image/l4/png/l4-brand1.png"} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="700"
              >
                <img src={"/image/l4/png/l4-brand2.png"} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="900"
              >
                <img src={"/image/l4/png/l4-brand3.png"} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="1100"
              >
                <img src={"/image/l4/png/l4-brand4.png"} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="1300"
              >
                <img src={"/image/l4/png/l4-brand5.png"} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="1500"
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

export default Brand;
