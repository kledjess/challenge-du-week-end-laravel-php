import React from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
  return (
    <>
      {/* <!-- Team Area --> */}
      <div className="team-section pt-13 pt-lg-24 pb-3 pb-lg-20 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mb-13 mb-lg-23 px-lg-7">
                <h2 className="title gr-text-4 mb-6 heading-color">Meet our doctors</h2>
                <p className="gr-text-8 mb-0 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-1.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Eugene Tucker</h3>
                  </Link>
                  <p className="gr-text-11 mb-0 text-color-opacity">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-2.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6 heading-color">Dr. Nannie Roberts</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0 text-color-opacity">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-3.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6 heading-color">Dr. Henry Hampton</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0 text-color-opacity">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-4.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Hannah Stanley</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-5.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">
                      Dr. Melvin Carpenter
                    </h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-6.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Nancy Watkins</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-7.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Roger McDonald</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-8.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Ella Gonzales</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/#" className="widget-img me-7">
                  <img src={"/image/telemedicine/png/team-9.png"} alt="" className=" circle-96" />
                </Link>
                <div className="widget-text">
                  <Link to="/#">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Olive Farmer</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
