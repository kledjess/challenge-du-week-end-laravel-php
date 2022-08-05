import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Testimonial = () => (
  <>
    {/* <!-- testimonial section --> */}
    <div className="testimonial-section1 bg-default-4">
      <Container>
        <div className="review-wrapper pt-9 pb-lg-25 pb-14 border-bottom">
          <Row className="justify-content-center align-items-center">
            <Col lg="12" xl="11">
              <div className="review-widget media align-items-center px-lg-7 flex-column flex-sm-row">
                <div className="widget-image me-12 me-lg-19 mb-9 mb-md-0">
                  <img className="circle-xxxl" src={"/image/l5/jpg/l5-testimonial1.jpg"} alt="" />
                </div>
                <div className="widget-text">
                  <img className="rating mb-11" src={"/image/l5/png/5-stars.png"} alt="" />
                  <h4 className="review-text gr-text-6 heading-color fw-bold mb-9">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Albino. It was super easy to edit and
                    publish.”
                  </h4>
                  <div className="reviewer-block d-flex flex-wrap">
                    <h5 className="name gr-text-9 me-7 mb-md-0 heading-color">
                      Franklin Hicks
                    </h5>
                    <span className="excerpt gr-text-9 mb-0 gr-text-color-opacity">
                      Web Developer
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default Testimonial;
