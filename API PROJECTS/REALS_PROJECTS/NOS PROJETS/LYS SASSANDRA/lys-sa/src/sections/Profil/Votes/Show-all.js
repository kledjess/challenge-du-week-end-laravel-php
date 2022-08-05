import React from "react";
import Link from "../../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";

const ShowAllVote = () => {
  return (
    <>
      <PageWrapper>
      <div className="sign-page bg-default-2 px-0">
          <header className="site-header bg-white">
            <Container fluid>
              <Row className="justify-content-center">
                <Col md="8" lg="5" xl="4">
                  <div className="brand text-center py-9">
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
          <Container>
            <Row className="justify-content-center py-5">
              <Col lg="12">
                <div className="main-block">
                  <div className="form-title ">
                    {/* <h2 className="title gr-text-7 mb-9 heading-color">Espace administrateur</h2> */}
                    <p className="gr-text-6 mb-13 text-color-opacity text-blue">
                      Votes
                    </p>
                  </div>
                  <div className="bg-white border rounded-10 px-4 py-8 shadow-1 mb-11">
<p></p>
                      <div className="bg-white border rounded-10 px-4 py-8 shadow-1 mb-11">
      
                    <h2 className="title gr-text-7 mb-9 heading-color">Quel joueur de LYS marquera le premier but de la rencontre LYS vs Stella Club Adjamé ?</h2>
                    <p className="gr-text-7 mb-13 text-color-opacity ">
                    vous repondez correctement à cette question et vous repartez avec 02 parks d'eau minerale Assinie et 02 parks de boissons planet +1 coupon de transport ELKA.
                    </p>
                    {/* <Link to="#">
           <h4 className="gr-text-9 heading-color text-green">Votre choix</h4>
       </Link> */}
 <a
                                className="nav-link "
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/profil/voter" 
                              >
                              <p className="gr-text-8 gr-color-blackish-blue-opacity-7 mb-0 text-green">
                              Votre choix
                              </p>
                            </a>

         </div>
         
         <div className="bg-white border rounded-10 px-4 py-8 shadow-1 mb-11">
      
      <h2 className="title gr-text-7 mb-9 heading-color">Couleur de Maillot</h2>
      <p className="gr-text-7 mb-13 text-color-opacity ">
     Choisissez une couleur de Maillot.
     
      </p>
      <Link to="#">
           <h4 className="gr-text-9 heading-color text-green">Votre choix</h4>
       </Link>
    </div>

    <div className="bg-white border rounded-10 px-4 py-8 shadow-1 mb-11">
      
      <h2 className="title gr-text-7 mb-9 heading-color">Meilleur But</h2>
      <p className="gr-text-7 mb-13 text-color-opacity ">
     Le meilleur But du dernier Match.
     
      </p>
      <Link to="#">
           <h4 className="gr-text-9 heading-color text-green">Votre choix</h4>
       </Link>
    </div>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        
      </PageWrapper>
    </>
  );
};
export default ShowAllVote;
