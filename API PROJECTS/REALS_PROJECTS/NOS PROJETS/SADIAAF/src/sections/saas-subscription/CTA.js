import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section-1 py-12 pt-lg-20 pb-lg-18 border-bottom border-gray-3 ">
        <Container>
          <Row className="align-items-center ">
            <Col lg="6">
              <div className="section-title cta-text pr-lg-5">
                <h2 className="gr-text-5 mb-7 heading-color">
                  Build better landing page fast
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
            <Col lg="6" xl="5" className="offset-xl-1">
              <div className="cta-btn d-flex flex-column flex-sm-row justify-content-lg-end mt-5 mt-lg-0">
                <Link
                  to="/#"
                  className="btn gr-bg-blue-opacity-1 text-color-opacity text-primary--light-only gr-hover-y with-icon me-sm-7 mb-6 mb-sm-0"
                >
                  Learn more
                  <i className="icon icon-tail-right fw-bold"></i>
                </Link>
                <Link to="/#" className="btn btn-primary with-icon gr-hover-y">
                  Get it now
                  <i className="icon icon-tail-right fw-bold"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cta;
