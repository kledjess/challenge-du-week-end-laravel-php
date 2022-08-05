import React from "react";
import Link from "../../components/Link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { useCallback, useState } from 'react';
import Router from "next/router";
import Swal from 'sweetalert2';




const Registerform = () => {

// Pour le formulaire d'enregistrement
const [nom, setNom] = useState();
const [prenom, setPrenom] = useState();
const [pays, setPays] = useState();
const [codeProfile, setCodeProfile] = useState("p");
const [emailForm, setEmailForm] = useState("");
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const [isLoggingIn, setIsLoggingIn] = useState(false);



// Enregistrer les informations de l'utilisateur
const handleSubmit = (event) =>{
  setIsLoggingIn(true);
  event.preventDefault();
  const dataa = {
    codeProfile:codeProfile,
    email:emailForm,
    password:password,
    confirmPassword:confirmPassword

  }

  fetch("http://localhost:3080/api/session/register", {
    // fetch("https://api.stablecoin.wealthtechinnovations.com/api/user", {
      method:"POST",
      body: JSON.stringify(dataa),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(dataa => {

    //handle data
    console.log("succes",dataa);
    // setter email
    localStorage.setItem('emailEnCours', emailForm);

    // getter email
    const ok = localStorage.getItem('emailEnCours');
    console.log("emailEnCours =>", ok)

    // setter pass
    localStorage.setItem('passEnCours', password);

    // getter pass
    const pass = localStorage.getItem('passEnCours');
    console.log("PassEnCours =>", pass)

      Swal.fire({
        position: 'center',
        icon: 'success',
        html: "<p> Votre inscription s'est effectuée avec succès </p>" ,
        showConfirmButton: false,
        timer: 5000
      })
  //  Actualiser après l'affichage 
   
    Router.push("/profil/update/activated"); 
  // Fin
  })
  .catch(error => {
    //handle error
    console.log(error);

  });

  

  // Swal.fire({
  //   position: 'center',
  //   icon: 'success',
  //   html: "<p> Votre inscription s'est effectuée avec succès </p>" ,
  //   showConfirmButton: false,
  //   timer: 5000
  // })
  //  Actualiser après l'affichage 
   
    // Router.push("/auth/login"); 
  // Fin

  
}

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
                    <h2 className="title gr-text-7 mb-9 heading-color">Inscription</h2>
                  </div>
                  <div className="bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                    <form onSubmit={handleSubmit}>
                      
                      <div className="form-group mb-6">
                        
                        <select 
                          className="form-control gr-text-11 border mt-3 bg-white"
                          id="nom"
                          hidden
                          defaultValue={codeProfile} 
                          onChange={(event)=>setCodeProfile(event.target.value)}

                        >
                          <option >Choisissez le type de compte</option>
                          <optgroup>
                            <option value="p">Electeur</option>
                            <option value="l">Membre du club</option>
                          </optgroup>
                        </select>
                      </div>
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
                          defaultValue={emailForm} 
                          onChange={(event)=>setEmailForm(event.target.value)}
                        />
                      </div>
                      <div className="form-group mb-6 forget-block">
                        <label
                          htmlFor="password"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Mot de Passe
                        </label>
                        <input
                          id="password"
                          className="form-control gr-text-11 border mt-3 bg-white heading-color"
                          type="password"
                          placeholder="********"
                          defaultValue={password} 
                          onChange={(event)=>setPassword(event.target.value)}
                        />
                      </div>
                      <div className="form-group mb-6 forget-block">
                        <label
                          htmlFor="password"
                          className="gr-text-11 fw-bold text-blackish-blue"
                        >
                          Confirmer le mot de Passe
                        </label>
                        <input
                          id="password"
                          className="form-control gr-text-11 border mt-3 bg-white heading-color"
                          type="password"
                          placeholder="********"
                          defaultValue={confirmPassword} 
                          onChange={(event)=>setConfirmPassword(event.target.value)}

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
                        <button className="form-btn btn btn-primary gr-hover-y w-100" type="submit" disabled={isLoggingIn}>
                          Créer un compte
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="form-bottom excerpt text-center">
                    <p className="sign-up-text gr-text-9 gr-text-color text-color-opacity">
                    Avez vous déjà un compte?{" "}
                      <Link to="/auth/login" className="text-primary">
                      Connectez vous
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
export default Registerform;
