import { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";

const ProductList = ({ filtro = "All" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { agregarAlCarrito } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://68f82478deff18f212b543ab.mockapi.io/Botines")
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

  if (loading) {
    return <h1 style={{ color: '#ffffffff', marginBottom: '10rem' }}>Loading...</h1>;
  }

  // ---------------------------------------------
  // 🔎 FILTRAR POR MARCA + BÚSQUEDA
  // ---------------------------------------------
  const finalFilteredProducts = products
    .filter(p => {
      if (filtro === "All") return true;
      return p.marca?.toLowerCase() === filtro.toLowerCase();
    })
    .filter(p => {
      if (!searchTerm) return true; // si no hay búsqueda, no filtramos
      return (
        p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  return (
    <>
     
      {/* SI NO HAY RESULTADOS */}
      {finalFilteredProducts.length === 0 ? (
        <h4 className="text-white text-center mt-4 mb-5">
          No se encontraron productos
        </h4>
      ) : (
        <Row>
          {finalFilteredProducts.map((product) => (
            <Col lg={3} md={6} sm={6} xs={12} key={product.id} className="mb-4">
              <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductList;
