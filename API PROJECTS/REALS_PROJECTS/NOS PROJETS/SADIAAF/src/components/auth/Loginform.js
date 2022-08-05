import React from "react";
import Link from "../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

const Loginform = () => {
  return (
    <>
      <PageWrapper>
        <div className="sign-in bg-default-2">
          <header className="site-header bg-white">
            <Container fluid>
              <Row className="justify-content-center">
                <Col md="8" lg="5" xl="4">
                  <div className="brand text-center py-9">
                    <Link to="/">
                      {/* <img src={"/image/logo-main-black.png"} alt="" /> */}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
          <Container>
            <Row className="justify-content-center">
              <Col md="7" lg="5" xl="4">
                <div className="main-block py-25">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-2 mb-9 heading-color">Login</h2>
                    <p className="gr-text-8 mb-13 text-color-opacity">
                    Pour commencer, vous devez vous connecter ici.
                    </p>
                  </div>
                  <div className="login-form bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    <form action="./">
                      <div className="form-group mb-6">
                        <label
                          htmlFor="email"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          E-mail
                        </label>
                        <input
                          className="form-control gr-text-11 border mt-3 bg-white"
                          type="email"
                          id="email"
                          placeholder="i.e. john@mail.com"
                        />
                      </div>
                      <div className="form-group mb-6 forget-block">
                        <div className="d-flex justify-content-between">
                          <label
                            htmlFor="password"
                            className="gr-text-11 fw-bold text-blackish-blue"
                          >
                            Mot de Passe
                          </label>
                          <Link className="forget-link" to="/reset-pass">
                          Mot de Passe oublier ?
                          </Link>
                        </div>
                        <input
                          id="password"
                          className="form-control gr-text-11 border mt-3 bg-white"
                          type="password"
                          placeholder="********"
                        />
                      </div>

                      <div className="form-group  mb-7">
                        <label
                          htmlFor="terms-check"
                          className="gr-check-input mb-7 d-flex"
                        >
                          <input
                            className="d-none "
                            type="checkbox"
                            id="terms-check"
                          />
                          <span className="checkbox mt-1 me-2"></span>
                          <p className="gr-text-11 text-blackish-blue mb-0">
                          Souvenez-vous de moi
                          </p>
                        </label>
                      </div>
                      <div className="form-group button-block">
                        <button className="form-btn btn btn-primary gr-hover-y w-100">
                        S'identifier
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="form-bottom excerpt text-center">
                    <p className="sign-up-text gr-text-9 gr-text-color">
                    Vous n'avez pas de compte ?{" "}
                      <Link to="/auth/register" className="text-primary">
                      Créer un nouveau compte.
                      </Link>
                    </p>
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
export default Loginform;
