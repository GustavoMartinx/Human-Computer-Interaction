import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col m6">
            <h3>Protótipo do Boost</h3>
            <p>Veja abaixo o nosso aplicativo funcionando! </p>
          </div>

          <div>
          <iframe title="This is a unique title"
          style={{border: '1px',
                  width: 1200,
                  height: 700}}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrDc98aVoPjy27CuIiEDRvz%2FUntitled%3Fnode-id%3D2%253A5%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A5%26show-proto-sidebar%3D1"
                  allowfullscreen>
          </iframe>
          </div>

          {/*
          <div className="col m6">
            <div className="stats">
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text darken-1">coders maimed</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text darken-1">fresh pots of coffee</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">123</h2>
                <p className="grey-text lighten-1">pounds gnar shredded</p>
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">0</h2>
                <p className="grey-text darken-1">honeybadgers harmed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>Along with a conservative dose of personality.</p>
          */}
        </div>
      </div>
    </section>
  );
};

export default About;
