import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-19 pb-5 bg-default-4">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" data-aos="flip-right" data-aos-duration="1000">
              <div className="content-img">
                <img src={"/image/l6/png/l6-content1-img.png"} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs="10" lg="5" className="ps-xl-21">
              <div className="section-title content-text mb-13">
                <h2 className="title gr-text-3 mb-6 heading-color">
                  Collaborate with team members.
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  We share common trends and strategies for improving your
                  rental income.
                </p>
              </div>
              <div className="content-widget">
                <Row>
                  <Col
                    md="6"
                    lg="11"
                    xl="11"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7 heading-color">
                        Project Based Groups
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="11"
                    xl="11"
                    data-aos="fade-left"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7 heading-color">
                        Unlimited Video Meetings
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
