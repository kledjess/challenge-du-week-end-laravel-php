import React from "react";
import Link from "../../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";

const Temp = () => {
  return (
    <>
      <PageWrapper>
      <div className="sign-page bg-default-2">
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
          {/* <Container>
            <Row className="justify-content-center py-5">
              <Col lg="12">
                <div className="main-block">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-7 mb-9 heading-color">Espace administrateur</h2>
                    <p className="gr-text-8 mb-13 text-color-opacity">
                      Nouveau scrutin
                    </p>
                  </div>
                  <div className="bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    ooook
                  </div>

                  
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>

        
      </PageWrapper>
    </>
  );
};
export default Temp;
