import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <h1 style={{ color: '#00ff99' }}>Productos Destacados</h1>
      <ProductList/>
    </div>
  );
};

export default Home;
