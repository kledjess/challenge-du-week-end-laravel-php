import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial Area --> */}
      <div className="pt-13 pt-md-25 pb-13 pb-md-25 mx-md-6 rounded-10 mb-6 bg-blackish-blue dark-mode-texts">
        <Container>
          <Row className="justify-content-center justify-content-lg-between align-items-center">
            {/* <!-- .testimonial-right-image starts --> */}
            <Col xs="10" md="6" lg="5" className="mb-n15 order-md-2">
              <div className="text-right pe-xl-13">
                <img src={"/image/l8/png/testimonial-right-image.png"} alt="" className="w-100" />
              </div>
            </Col>

            {/* <!-- ./testimonial-right-image ends --> */}
            <Col sm="11" md="6" className="pt-19 pt-lg-0">
              <div className="pe-lg-3 pe-xl-13 d-flex flex-column h-100 mt-8 mt-md-0">
                <div className="quote mb-13 mb-lg-25">
                  <img
                    src={"/image/svg/quote-image.svg"}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration="500"
                  />
                </div>
                <div className="ratings d-flex justify-content-start mb-12">
                  <i
                    className="fas fa-star me-1 text-yellow-orange gr-text-8"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  ></i>
                  <i
                    className="fas fa-star mx-1 text-yellow-orange gr-text-8"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="700"
                  ></i>
                  <i
                    className="fas fa-star mx-1 text-yellow-orange gr-text-8"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  ></i>
                  <i
                    className="fas fa-star mx-1 text-yellow-orange gr-text-8"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1300"
                  ></i>
                  <i
                    className="fas fa-star mx-1 text-yellow-orange gr-text-8"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1600"
                  ></i>
                </div>
                <p
                  className="gr-text-6 gr-text-color-opacity text-color-opacity"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                >
                  “OMG! I cannot believe that I have got a brand new room after
                  getting your services. It was super easy to order and get
                  started.”
                </p>
                <div className="pt-7 d-flex">
                  <h3 className="gr-text-9 fw-bold me-6 text-white">
                    Maria José Botín
                  </h3>
                  <span className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    Interior Designer
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
