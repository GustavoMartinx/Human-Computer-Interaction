import React from 'react';
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg type="lines" num={450} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h2>
            BOOST
          </h2>

          <p className="big">
            Economia de Energia
            <br/>
            Amiga dos Bolsos e da Natureza
          </p>

          {/*
          <a className="btn waves-light waves-effect m-r-16">Feature</a>
          <a className="btn waves-light waves-effect" target="_blank" href="https://github.com/nordicgiant2/cool-landing">Github</a>
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
