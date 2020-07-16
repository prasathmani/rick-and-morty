import React from 'react';
import ImgNotFound from 'assets/images/404-image.png';
import './styles/NotFound.scss';

const NotFound = () => (
  <section className="NotFound">
    <img src={ImgNotFound} alt="" />
    <div>
      <h1>404</h1>
      <h3>Not Found</h3>
    </div>
  </section>
);

export default NotFound;
