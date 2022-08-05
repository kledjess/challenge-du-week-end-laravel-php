import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Video = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <div className="shape">
        <img src={"/image/svg/l6-video-wave.svg"} alt="" className="w-100 light-shape default-shape" />
        <img src={"/image/svg/l6-video-wave-dark.svg"} alt="" className="w-100 dark-shape" />
      </div>
      {/* <!-- Video Area --> */}
      <div className="video-area position-relative z-index-1 mt-n29 mt-lg-n35">
        <Container>
          <Row>
            <Col xs="12" className="p-relative">
              <div className="video-image-pattern-bottom ">
                <img className="w-100 rounded-20" src={"/image/l6/jpg/l6-video-img.jpg"} alt="" />
                <a
                  className="circle-xxl bg-white gr-abs-center gr-abs-hover-y gr-text-8"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <i className="icon icon-triangle-right-17-2 text-red"></i>
                </a>
                <div
                  className="gr-abs-bl-custom pattern aos-init aos-animate"
                  data-aos="fade-down-left"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <img src={"/image/l6/png/l6-video-pattern.png"} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Video;
