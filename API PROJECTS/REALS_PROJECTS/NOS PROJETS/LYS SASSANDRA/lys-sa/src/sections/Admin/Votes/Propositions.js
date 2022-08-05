import React, { useRef } from "react";
import styled from "styled-components";
import Link from "../../../components/Link";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";


const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Titre ici",
    type: "Full-time",
    location: "Description ici",
    brandLogo: "/image/lysfc/admin/scrutin.jpg",
    brandName: "Konaté",
  },
  {
    title: "Titre ici",
    type: "Full-time",
    location: "Description ici",
    brandLogo: "/image/lysfc/admin/scrutin.jpg",
    brandName: "Mariam",
  },
  {
    title: "Titre ici",
    type: "Full-time",
    location: "Description ici",
    brandLogo: "/image/lysfc/admin/scrutin.jpg",
    brandName: "Kouamé",
  },
  {
    title: "Titre ici",
    type: "Full-time",
    location: "Description ici",
    brandLogo: "/image/lysfc/admin/scrutin.jpg",
    brandName: "Kouassi",
  },
  {
    title: "Titre ici",
    type: "Full-time",
    location: "Description ici",
    brandLogo: "/image/lysfc/admin/scrutin.jpg",
    brandName: "Koné Arouna",
  },
];

const Propositions = () => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    className: "single-slide",
    

    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- Jobs section --> */}
      <div className="job-site-page feature-section bg-default-6 bg-pattern pattern-5 pt-13 pt-lg-24 pb-2 pb-lg-22">
        <Container>
          <Row className="justify-content-lg-between align-items-center pb-9 pb-sm-0">
          <h2 className="title gr-text-7 mb-10 heading-color text-center">Espace Administrateur</h2>

          <Row className="justify-content-center align-items-center">
           <Col
              xs="12"
              md="6"
              lg="6"
              xl="6"
             className="order-lg-1 mb-5"
             data-aos="fade-right"
             data-aos-duration="750"
             data-aos-delay="500"
           >
             <div className="hero-btn text-center ">
            <a
              className="nav-link btn btn-outline-blue"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/admin/votes/scrutin" 
            >
              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                Créer un nouveau scrutin
              </p>
            </a>

           
           </div>
           </Col>

           <Col
              xs="12"
              md="6"
              lg="6"
              xl="6"
             className="order-lg-1 mb-5"
             data-aos="fade-right"
             data-aos-duration="750"
             data-aos-delay="500"
           >
             <div className="hero-btn text-center ">
             


            <a
              className="nav-link btn btn-outline-blue"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/admin/votes/scrutin" 
            >
              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                Faire un pronostic
              </p>
            </a>

           
           </div>
           </Col>

           <Col
             xs="12"
             md="6"
             lg="6"
             xl="6"
             className="order-lg-1"
             data-aos="fade-right"
             data-aos-duration="750"
             data-aos-delay="500"
           >
             <div className="hero-btn text-center ">
             <a
              className="nav-link btn btn-outline-blue"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/admin/votes/scrutin" 
            >
              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                Ajouter un administrateur
              </p>
            </a>
           </div>
           </Col>
           </Row>


            <Col sm="8" md="6" lg="6" xl="5">
              <div className="section-title mb-9 mb-sm-13 mb-lg-21"> 
              </div>
            </Col>
            <Col sm="4" md="6" lg="4" xl="3">
              <div className="job-feature-slider-arrows ms-auto">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev();
                  }}
                >
                  Previous
                </button>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext();
                  }}
                >
                  Next
                </button>
              </div>
            </Col>
          </Row>
          <div
            className="job-feature-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <SliderStyled ref={elSlider} {...slickSettings}>
              {items.map(
                (
                  { link = "/admin/votes/show_proposition", title, type, location, brandLogo, brandName },
                  index
                ) => (
                  <div key={index}>
                    <Link
                      to={link}
                      className="feature-widget focus-reset bg-white d-flex flex-column min-height-px-297 border rounded-10 pt-8 pb-8 ps-7 mx-6 ps-lg-9 pe-md-8 pe-lg-10 gr-hover-shadow-1"
                    >
                      <div className="mb-auto">
                        <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                          {/* {type} */}
                        </h5>
                        <h3 className="gr-text-7 text-blackish-blue">
                          {title}
                        </h3>
                        <p className="gr-text-11 gr-color-blackish-blue-opacity-7 mb-0">
                          {location}
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="circle-32 pe-5">
                          <img src={brandLogo} alt="" width={40}/>
                        </div>
                        <div className="text">
                          <p className="gr-text-10 text-blackish-blue">
                            {brandName}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </SliderStyled>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Propositions;
