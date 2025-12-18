import { useEffect, useState, useContext, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";

const ProductList = ({ filters, orden, setProductsCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { agregarAlCarrito } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://68f82478deff18f212b543ab.mockapi.io/Botines")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const finalFilteredProducts = useMemo(() => {
    let filtered = products
      .filter(p => {
        const marcaSeleccionada = filters?.marca ?? "All";
        if (marcaSeleccionada === "All") return true;
        return p.marca?.toLowerCase() === marcaSeleccionada.toLowerCase();
      })
      .filter(p => {
        if (!searchTerm) return true;
        return (
          p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .filter(p => {
        if (!filters?.precioMax) return true;
        const price = Number(p.price.replace(/\./g, ""));
        return price <= Number(filters.precioMax);
      });

    if (orden === "price-asc") {
      filtered.sort((a, b) =>
        Number(a.price.replace(/\./g, "")) -
        Number(b.price.replace(/\./g, ""))
      );
    }

    if (orden === "price-desc") {
      filtered.sort((a, b) =>
        Number(b.price.replace(/\./g, "")) -
        Number(a.price.replace(/\./g, ""))
      );
    }

    if (orden === "name-asc") {
      filtered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return filtered;
  }, [products, filters, searchTerm, orden]);

  useEffect(() => {
    setProductsCount(finalFilteredProducts.length);
  }, [finalFilteredProducts, setProductsCount]);

  // ⬇️ AHORA SÍ, DESPUÉS DE TODOS LOS HOOKS
  if (loading) {
    return <h1 style={{ color: '#fff', marginBottom: '10rem' }}>Loading...</h1>;
  }

  return (
    <>
      {finalFilteredProducts.length === 0 ? (
        <h4 className="text-white text-center mt-4 mb-5">
          No se encontraron productos
        </h4>
      ) : (
        <Row>
          {finalFilteredProducts.map(product => (
            <Col lg={3} md={6} sm={6} xs={12} key={product.id} className="mb-4">
              <ProductCard
                product={product}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};


export default ProductList;
