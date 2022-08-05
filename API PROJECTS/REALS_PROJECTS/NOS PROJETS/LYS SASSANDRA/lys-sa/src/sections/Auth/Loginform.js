import React from "react";
import Link from "../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import Router from "next/router";
import Swal from 'sweetalert2'



import { useCallback, useState, useEffect } from 'react';
import { magic } from '../../../magic';




const Loginform = () => {
// Variable de la connexion
const [emailForm, setEmailForm] = useState();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")
const [isLoggingIn, setIsLoggingIn] = useState(false);
// Fin

// Fonction de connexion
const handleSubmit = async(event) =>{
    event.preventDefault();
    setIsLoggingIn(true);
    const dataa = {
      email:emailForm,
      password:password

    }

    console.log("ok")


      // const res = await fetch("http://localhost:3080/api/user/login", {
      const res = await fetch("https://api.stablecoin.wealthtechinnovations.com/api/user/login", {
        method:"POST",
        body: JSON.stringify(dataa),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    console.log("data", data)
    // setter
    localStorage.setItem('tokenEnCours', data.message);
    localStorage.setItem('auth', data.auth);

    // getter
    const tokenUser = localStorage.getItem('tokenEnCours');
    console.log("tokenEnCours", tokenUser);

     
     
     // FIN PARTIE SWITCH ALERT

     Swal.fire({
            position: 'center',
            icon: 'success',
            html: "<p> Votre connexion s'est effectuée avec succès </p>" ,
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            window.location.reload()
            }, 1500)
            Router.push("/profil/")
     // FIN PARTIE REDIRECTION
     
  

    // .then(dataa => {
    //   //handle data
    //   console.log("succes",dataa);
    //   console.log("Auth",dataa.auth);
    //   console.log("Token",dataa.message);
     
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'success',
    //       html: "<p> Votre inscription s'est effectuée avec succès </p>" ,
    //       showConfirmButton: false,
    //       timer: 5000
    //     })
    // //  Actualiser après l'affichage 
     
    //   // Router.push("/auth/authentication"); 
    // // Fin
    // })
    // .catch(error => {
    //   handle error
    //   console.log(error);

    // });

    
}
// Fin

 /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const sendLogin = useCallback(async (event) => {
    event.preventDefault();

    setIsLoggingIn(true);

    
    try {
      const dataa = {
        email:email,
        password:password
  
      }

    console.log("email1 =>",email)
    console.log("password =>",password)

    
      // Pour connexion simple
    const res = await fetch("http://localhost:3080/api/session/login", {
      // const res = await fetch("https://apiv3.liquidity.wealthtechinnovations.com/api/session/login", {
        method:"POST",
        body: JSON.stringify(dataa),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    console.log("data", data)
    // setter
    localStorage.setItem('tokenEnCours', data.token);

    // setter userId
    localStorage.setItem('idEnCours', data.auth);


    // getter
    const ok = localStorage.getItem('tokenEnCours');
    console.log("tokenEnCours", ok)

    console.log("email",email)
      //Pour magic Grab auth token from loginWithMagicLink
      const didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href,
      });
      console.log("email 2",email)
    } catch {
      setIsLoggingIn(false);
    }
  }, [email, password]);
  // Fin

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
                <div className="main-block py-5">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-7 mb-9 heading-color">Connexion</h2>
                    
                  </div>
                  <div className="login-form bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    <form onSubmit={sendLogin}>
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
                          defaultValue={email} 
                          onChange={(event)=>setEmail(event.target.value)}
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
                          defaultValue={password} 
                          onChange={(event)=>setPassword(event.target.value)}
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
                        <button className="form-btn btn btn-primary gr-hover-y w-100" disabled={isLoggingIn}>
                          S'identifier
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="form-bottom excerpt text-center">
                    <p className="sign-up-text gr-text-9 gr-text-color">
                      Pas de compte ?{" "}
                      <Link to="/auth/register" className="text-primary">
                      Créer un compte.
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
