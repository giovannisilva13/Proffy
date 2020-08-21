import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';


function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de estudos online.</h2>
        </div>
        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <a href="" className="study"></a>
        </div>
      </div>
    </div>
  )
}

export default Landing;