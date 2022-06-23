import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="https://gustavomartinx.github.io/Human-Computer-Interaction/" className="brand-logo left">Boost</a>
        <a href="/" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="https://gustavomartinx.github.io/Human-Computer-Interaction/">Home</a>
          </li>
          <li>
            <a href="https://gustavomartinx.github.io/Human-Computer-Interaction/">Services</a>
          </li>
          <li>
            <a href="https://gustavomartinx.github.io/Human-Computer-Interaction/">Who we are</a>
          </li>
          <li>
            <a href="https://gustavomartinx.github.io/Human-Computer-Interaction/">Document</a>
          </li>
          <li>
            <a href="https://github.com/GustavoMartinx/Human-Computer-Interaction">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
