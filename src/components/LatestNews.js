import React from 'react';
import BlogPost from './BlogPost';

const LatestNews = () => {
  return (
    <section id="news">
      <div className="container">
        <h1>Our Team</h1>
        <div className="row">
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
