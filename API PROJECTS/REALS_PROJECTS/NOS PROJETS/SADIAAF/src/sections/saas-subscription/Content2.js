import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-5 pt-lg-19 pb-lg-23 bg-default-1">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="8" xl="7">
              <div className="section-title text-center mb-11 mb-lg-19">
                <h2 className="gr-text-4 mb-6 heading-color">Manage your projects fast</h2>
                <p className="gr-text-8 px-lg-4 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="6" className="mb-10 mb-lg-0">
              <div className="content-img img-group-2">
                <img className="img-fluid" src={"/image/l1/png/l1-content2-img.png"} alt="" />
              </div>
            </Col>
            <Col sm="11" lg="6" xl="5">
              <div className="content-widget-1 ps-lg-9">
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 me-8">
                    <span className="text-primary--light-only gr-text-9 heading-color">
                      1
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7 heading-color">Create a project</h3>
                    <p className="gr-text-9 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 me-8">
                    <span className="text-primary--light-only gr-text-9 heading-color">
                      2
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7 heading-color">Assign related people</h3>
                    <p className="gr-text-9 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 me-8">
                    <span className="text-primary--light-only gr-text-9 heading-color">
                      3
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7 heading-color">Make it done on-time</h3>
                    <p className="gr-text-9 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
