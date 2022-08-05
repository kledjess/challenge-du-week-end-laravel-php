import React, { useRef } from "react";
import Link from "../../components/Link";
import { Container, Row, Col } from "react-bootstrap";






const SideBar = () => {

  return (
    <>
      {/* <!-- Jobs section --> */}
      <div className=" pattern-5 pt-13 pt-lg-24 pb-2 pb-lg-22">
        <Container>
          
          <div
            className="job-feature-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {/*Sidebar */}
            <div >
                <div className="mb-auto"><br/>
                    <div
                      
                      className="feature-widget focus-reset bg-white d-flex flex-column  border rounded-10 pt-8 pb-8 ps-7 mx-6 ps-lg-9 pe-md-8 pe-lg-10 gr-hover-shadow-1"
                    >
                      <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/profil/" 
                              >
                            <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Dashboard
                            </p>
                        </a>
                         <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/profil/" 
                              >
                            <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Profil
                            </p>
                        </a>
                        

                        {/* <Link href="/transfert/"> */}
                            {/* <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0"> */}
                            <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/protefeuille/" 
                              >
                              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Portefeuille
                              </p>
                            </a>
                            <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/profil/votes/" 
                              >
                              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Votes
                              </p>
                            </a>
                            <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/recompense/" 
                              >
                            <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Recompense
                            </p>
                        </a>
                            <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/admin/votes/proposition" 
                              >
                              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0">
                                Espace lys
                              </p>
                            </a>
                            {/* </p> */}
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            {/* Fin Sidebar*/}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SideBar;
