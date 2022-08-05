import React, { useContext } from "react";
import Link from "../Link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const contactClassName =
    gContext.footer.theme === "dark" ? "gr-text-color" : "text-primary";

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color"
      : "gr-text-color gr-hover-text-blue";

  const copyClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color-opacity"
      : "gr-text-color";

  return (
    <>
      <div
        className={`footer-section ${
          gContext.footer.theme === "dark"
            ? "bg-blackish-blue dark-mode-texts"
            : ""
        }`}
      >
        <Container>
          <div className="footer-top pt-14 pt-lg-25 pb-lg-19">
            <Row>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7 text-color-opacity">Company</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        About us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Contact us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Careers
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Press
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7 text-color-opacity">Product</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Features
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Pricing
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        News
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Help desk
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7 text-color-opacity">Services</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Digital Marketing
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Content Writing
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        SEO for Business
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        UI Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3" className="ps-lg-15">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7 text-color-opacity">Legal</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" className={`gr-text-9 ${linkClassName}`}>
                        Return Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7 text-color-opacity">Contact us</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <a
                        className={`gr-text-9 fw-bold hover-underline active ${contactClassName}`}
                        href="mailto:support@grayic.com"
                      >
                        support@grayic.com
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className={`gr-text-9 fw-bold hover-underline active ${contactClassName}`}
                        href="tel:+133-394-3439-1435"
                      >
                        +133-394-3439-1435
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p
                  className={`copyright-text gr-text-11 mb-6 mb-lg-0 text-center text-lg-start ${copyClassName}`}
                >
                  © 2020 Copyright, All Right Reserved, Made by Grayic with
                  <i
                    className={`icon icon-heart-2-2 ${
                      gContext.footer.theme === "dark"
                        ? "text-sky-blue"
                        : "text-green"
                    } align-middle ms-2`}
                  ></i>
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-end">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ms-7">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-logo-twitter"></i>
                    </Link>
                  </li>
                  <li className="ms-7">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </Link>
                  </li>
                  <li className="ms-7">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </Link>
                  </li>
                  <li className="ms-7">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-logo-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
