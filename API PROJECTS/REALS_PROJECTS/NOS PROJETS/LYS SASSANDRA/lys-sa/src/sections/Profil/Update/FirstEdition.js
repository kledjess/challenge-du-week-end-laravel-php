import React from "react";
import Link from "../../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";
import Router from "next/router";

// import React from 'react';
// import Link from 'next/link';

import { useCallback, useState, useEffect } from 'react';
// import Router from 'next/router';
import { magic } from '../../../../magic';

import Swal from 'sweetalert2';


const FirstEdition = () => {
  
// Pour le formulaire d'enregistrement
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [mobile, setMobile] = useState("");
const [codeCountry, setCodeCountry] = useState("");

const [emailForm, setEmailForm] = useState();
const [password, setPassword] = useState()

const [isLoggingIn, setIsLoggingIn] = useState(false);



// Enregistrer les informations de l'utilisateur
const addInformations = useCallback(async (event) => {
  event.preventDefault();
  setIsLoggingIn(true);
   

 
  
  try {
    // const emails = 
    // setEmail(localStorage.getItem('emailEnCours'))
    // console.log("emailEnCours =>", email)
    
    const email = localStorage.getItem('emailEnCours');
    // setEmail(ok)
    // console.log("emailEnCours =>", email)

    // getter pass
    const pass = localStorage.getItem('passEnCours');
    // console.log("pass En Cours =>", pass)



    const dataLogin = {
      email:email,
      password:pass

    }

    // console.log("okkkkkk 1 =>",firstName)
    const resp = await fetch("http://localhost:3080/api/session/login", {
    // const resp = await fetch("https://apiv3.liquidity.wealthtechinnovations.com/api/session/login", {
      method:"POST",
      body: JSON.stringify(dataLogin),
      headers: {
          'Content-Type': 'application/json',
      }
  })
  const datalog = await resp.json();
  // console.log("Succès login=>",datalog)

  // console.log("okkkkkk 2 =>",firstName)

  //  // setter
   localStorage.setItem('tokenEnCours', datalog.token);
   localStorage.setItem('idEnCours', datalog.auth);
  
   console.log("okkkkkk 3 =>",firstName)

   // getter
   const token = localStorage.getItem('tokenEnCours');
   console.log("token Login", token)
   console.log("Nom1 =>",firstName)
  // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlzQWRtaW4iOjAsImlhdCI6MTY1OTQ4MDczNSwiZXhwIjoxNjU5NjUzNTM1fQ.MV7AF8vkEhk5jQNPKbUQhRYMiwZpbFKi5xeGKLhivwM"


          const dataa = {
            firstName:firstName,
            lastName:lastName,
            mobile:mobile,
            address:"0X68G6755FRY4GGGHFDTE55T543ZYDZZZTHU6UYFR",
            codeCountry:codeCountry
      
          }

        // console.log("email1 =>",email)
        // console.log("password =>",password)
        // console.log("Nom2 =>",dataa.firstName)


        
          // Pour connexion simple
        const res = await fetch("http://localhost:3080/api/session/first-edition", {
          // const res = await fetch("https://apiv3.liquidity.wealthtechinnovations.com/api/session/first-edition", {
            method:"PUT",
            body: JSON.stringify(dataa),
            headers: {
                'Content-Type': 'application/json',
                Authorization:  `Bearer ${token}`
            }
        })
        console.log("OK1")
        const data = await res.json();
        console.log("data", data)
       

        console.log("email",email)
        //Pour magic Grab auth token from loginWithMagicLink
        const didToken = await magic.auth.loginWithMagicLink({
          email,
          redirectURI: new URL('/callback', window.location.origin).href,
        });
        // redirectURI: new URL('/callback', window.location.origin).href

      // }else{
      //   console.log("Votre address n'a pas été générée")
      // }
    // }else{
    //   console.log("Magic n'a pas pu se connecter")
    // }
    
  } catch {
    setIsLoggingIn(false);
  }
}, [firstName,lastName,mobile,codeCountry]);
// Fin
// Fin

  return (
    <>
      <PageWrapper>
        <div className="sign-page bg-default-2">
          <header className="site-header bg-white">
            <Container fluid>
              <Row className="justify-content-center">
                <Col md="8" lg="5" xl="4">
                  <div className="brand text-center py-9">
                    {/* <Link to="/">
                      <img src={"/image/logo-main-black.png"} alt="" />
                    </Link> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
          <Container>
            <Row className="justify-content-center py-5">
              <Col lg="4">
                <div className="main-block">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-7 mb-9 heading-color">Activation de compte</h2>
                  </div>
                  <div className="bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    <form onSubmit={addInformations}>
                    
                      <div className="form-group mb-6">
                        <label
                          htmlFor="nom"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Nom
                        </label>
                        <input
                          className="form-control gr-text-11 border mt-3 bg-white"
                          type="text"
                          id="nom"
                          placeholder=""
                          defaultValue={firstName} 
                            onChange={(event)=>setFirstName(event.target.value)}
                        />
                      </div>

                      <div className="form-group mb-6">
                        <label
                          htmlFor="prenom"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Prénoms
                        </label>
                        <input
                          className="form-control gr-text-11 border mt-3 bg-white"
                          type="text"
                          id="prenom"
                          placeholder=""
                          defaultValue={lastName} 
                          onChange={(event)=>setLastName(event.target.value)}
                        />
                      </div>
                      
                      <div className="form-group mb-6">
                        <label
                          htmlFor="pays"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Pays
                        </label>
                        <select 
                          className="form-control gr-text-11 border mt-3 bg-white"
                          id="nom"
                          defaultValue={codeCountry} 
                          onChange={(event)=>setCodeCountry(event.target.value)}
                        >
                          <option >Cloisissez un pays</option>
                          <optgroup >
                            <option value="ci">Côte d'Ivoire</option>
                            <option value="fr">France</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="form-group mb-6">
                        <label
                          htmlFor="contact"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Numéro Téléphone
                        </label>
                        <input
                          className="form-control gr-text-11 border mt-3 bg-white"
                          type="text"
                          id="contact"
                          placeholder=""
                          defaultValue={mobile} 
                          onChange={(event)=>setMobile(event.target.value)}
                        />
                      </div>

                      <div className="form-group  mb-7">
                        <label
                          htmlFor="terms-check"
                          className="gr-check-input mb-7 d-flex"
                        >
                          <input
                            className="d-none mt-3"
                            type="checkbox"
                            id="terms-check"
                          />
                          <span className="checkbox mt-1 me-2"></span>
                          <p className="gr-text-11 text-blackish-blue mb-0">
                            J'accepte les conditions 
                          </p>
                        </label>
                      </div>
                      <div className="form-group button-block mb-2">
                        <button className="form-btn btn btn-primary gr-hover-y w-100"  disabled={isLoggingIn}>
                            Envoyer
                        </button>
                      </div>
                    </form>
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
export default FirstEdition;
