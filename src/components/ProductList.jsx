import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';


const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    let url = 'https://68f82478deff18f212b543ab.mockapi.io/Botines';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <h1 style={{ color: '#ffffffff', marginBottom: '10rem' }}>Loading...</h1>;
  }


  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        // theme="colored"
        theme='dark'
        style={{ textAlign: "center" }}               // Estilos del contenedor del toast
      />

      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
