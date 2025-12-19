import { useEffect, useState, useContext, useMemo } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";

const PRODUCTS_PER_PAGE = 8;

const ProductList = ({ filters, orden, setProductsCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { agregarAlCarrito } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  /* 🔁 Resetear página al cambiar filtros o búsqueda */
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);

  useEffect(() => {
  const section = document.getElementById("productos");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}, [currentPage]);


  /* 📦 Fetch productos */
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

  /* 🔍 Filtros + búsqueda + orden */
  const filteredProducts = useMemo(() => {
    let filtered = products
      .filter(p => {
        if (!filters?.marca || filters.marca === "All") return true;
        return p.marca?.toLowerCase() === filters.marca.toLowerCase();
      })
      .filter(p => {
        if (!searchTerm) return true;
        return (
          p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.name?.toLowerCase().includes(searchTerm.toLowerCase())
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

  /* 🔢 Contador */
  useEffect(() => {
    setProductsCount(filteredProducts.length);
  }, [filteredProducts, setProductsCount]);

  if (loading) {
    return <h4 className="text-white text-center my-5">Cargando productos...</h4>;
  }

  /* 📄 PAGINADO */
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      {filteredProducts.length === 0 ? (
        <h4 className="text-white text-center mt-4 mb-5">
          No se encontraron productos
        </h4>
      ) : (
        <>
          <Row>
            {paginatedProducts.map(product => (
              <Col
                lg={3}
                md={6}
                sm={6}
                xs={12}
                key={product.id}
                className="mb-4"
              >
                <ProductCard
                  product={product}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </Col>
            ))}
          </Row>

          {/* 🔢 CONTROLES DE PAGINADO */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center gap-2 mt-4 mb-5">

              <Button
                size="sm"
                variant="outline-light"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                ←
              </Button>

              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={currentPage === index + 1 ? "light" : "outline-light"}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                size="sm"
                variant="outline-light"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                →
              </Button>

            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductList;
