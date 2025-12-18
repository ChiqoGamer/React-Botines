import { useState } from 'react';
import BannerPrincipal from './BannerPrincipal';
import ProductList from './ProductList';
import { Button, Form, Offcanvas } from 'react-bootstrap';

const Home = () => {
  const [orden, setOrden] = useState("default");
  const [showFilters, setShowFilters] = useState(false);
  const [productsCount, setProductsCount] = useState(0);

  const [filters, setFilters] = useState({
    marca: "All",
    precioMax: ""
  });

  return (
    <div className="container">
      <BannerPrincipal />

      <div id="productos" className="mt-4">

        {/* HEADER */}
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">

          <small className="text-light">
            {productsCount} productos
          </small>

          <Form.Select
            size="sm"
            style={{ maxWidth: "140px", backgroundColor: "#030f0f", color: "#fff", border: "none" }}
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="default">Ordenar por</option>
            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="name-asc">Nombre A-Z</option>
          </Form.Select>

          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setShowFilters(true)}
            className="d-flex align-items-center gap-2"
          >
            Filtrar
            <i className="bi bi-sliders"></i>
          </Button>
        </div>

        <ProductList orden={orden} filters={filters} setProductsCount={setProductsCount} />
      </div>

      {/* OFFCANVAS */}
      <Offcanvas
  show={showFilters}
  onHide={() => setShowFilters(false)}
  placement="end"
  data-bs-theme="dark"
  style={{ backgroundColor: "#000000ff" }}
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Filtros</Offcanvas.Title>
  </Offcanvas.Header>

  <Offcanvas.Body>

    <div className="mb-4">
      <h6 className="fw-bold mb-2 text-light">Marca</h6>

      {["All", "Nike", "Adidas", "Puma"].map(marca => (
        <Form.Check
          key={marca}
          type="radio"
          name="marca"
          label={marca}
          checked={filters.marca === marca}
          onChange={() =>
            setFilters(prev => ({ ...prev, marca }))
          }
          className="mb-2 text-light"
        />
      ))}
    </div>

    <div className="mb-4">
      <h6 className="fw-bold mb-2 text-light">Precio máximo</h6>
      <Form.Control
        type="number"
        placeholder="Ej: 200000"
        value={filters.precioMax}
        className="bg-dark text-light border-secondary"
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            precioMax: e.target.value
          }))
        }
      />
    </div>

    <div className="d-flex gap-2">
      <Button variant="outline-light" className="w-100" onClick={() => setFilters({ marca: "All", precioMax: "" })}>
        Limpiar
      </Button>

      <Button variant="light" className="w-100" onClick={() => setShowFilters(false)}>
        Aplicar
      </Button>
    </div>

  </Offcanvas.Body>
</Offcanvas>


    </div>
  );
};

export default Home;
