import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';

const ProductList = ({filtro = "All" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    let url = 'https://68f82478deff18f212b543ab.mockapi.io/Botines';

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
  }, []);

  // 🔍 APLICAR FILTRO DE MARCA
  const productsFiltered =
    filtro === "All"
      ? products
      : products.filter(
          (p) => p.marca?.toLowerCase() === filtro.toLowerCase()
        );

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
        theme="dark"
        style={{ textAlign: "center" }}
      />

      <Row>
        {productsFiltered.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}

        {productsFiltered.length === 0 && (
          <h4 className="text-white text-center mt-4">
            No hay productos de esta marca
          </h4>
        )}
      </Row>
    </>
  );
};

export default ProductList;
