import React from 'react';

const Features = () => {
  return (
    <section id="features" className="dark"> {/* grey lighten-4 */}
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Some Features</h2>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">bolt</i>
            <h5>Estabeleça <br/> Metas</h5>
            <p>As metas auxiliam o usuário a controlar os gastos por meio de um parâmetro estabelecido!</p>
          </div>
          <div className="col m3">
            <i className="material-icons">devices</i>
            <h5>Aparelhos Conectados</h5>
            <p>O aplicativo permite o monitoramento de gastos em tempo real graças à instalação de medidores nos aparelhos!</p>
          </div>
          <div className="col m3">
            <i className="material-icons">leaderboard</i>
            <h5>Relatórios Simples</h5>
            <p>Os relatórios emitidos periodicamente apresentam os dados de maneira um simples que auxiliam no reconhecimento da causa do gasto elevado de energia!</p>
          </div>
          <div className="col m3">
            <i className="material-icons">mood</i>
            <h5>Você <br/> Economiza</h5>
            <p>Nós te ajudamos a economizar dependendo dos gastos estabelecidos na meta!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
