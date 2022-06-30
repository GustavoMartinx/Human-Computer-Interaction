import React from 'react';

const BlogPost = ({ img, nome, dev }) => {
  return (
    <div className="blogpost">
        <div className="image-wrapper">
          <img className="responsive-img" src={img} alt="nossas-fotos" />
        </div>
        <div className="content">
          <h5>{nome}</h5>
          <p>{dev}</p>
        </div>
        <div className="footer">
          {/* 
          <div className="row">
            <div className="footer-content">
              <i className="material-icons">today</i>
              <span>Feb 26, 2019</span>
            </div>
            <div className="footer-content">
              <i className="material-icons">chat bubble outline</i>
              <p>6</p>
            </div>
          </div>
          </div>
          <div className="read-more">
            <a href="">Read more</a>
          */}
        </div>
    </div>
  );
};

export default BlogPost;
