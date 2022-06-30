import React from 'react';
import BlogPost from './BlogPost';
import Joao from '../img/Joao.jpg'
import Gustavo from '../img/Gustavo.jpg'
import Ingrid from '../img/Ingrid.jpg'
import Catarine from '../img/Catarine.jpg'
import Ruan from '../img/Ruan.jpg'

const LatestNews = () => {
  return (
    <section id="news">
      <div className="container">
        <h1>Our Team</h1>
          <div className='wrapper'>
            <BlogPost img={Joao} nome="João Vitor" dev="CEO & Dev"/>
            <BlogPost img={Gustavo} nome="Gustavo Martins" dev="Developer"/>
            <BlogPost img={Ingrid} nome="Ingrid Reupke" dev="Developer"/>
            <BlogPost img={Catarine} nome="Catarine Cruz" dev="Developer"/>
            <BlogPost img={Ruan} nome="Ruan Lopes" dev="Developer"/>
          </div>
      </div>
    </section>
  );
};

export default LatestNews;
