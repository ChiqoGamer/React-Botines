import React from 'react';
import BannerPrincipal from './BannerPrincipal';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <BannerPrincipal />
      <div id="productos">
        <h1 style={{ color: '#00ff99', fontSize:'2rem', margin:'2rem 0'}}>Productos Destacados</h1>
        <ProductList/>
      </div>
    </div>
  );
};

export default Home;
