import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // ⭐ Estado para controlar si el menú está abierto
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="mb-4 custom-navbar fixed-top" >
      <Container>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-4"
          onClick={() => setExpanded(false)}   // <<-- se cierra también
        >
          <img
            src="reactBotines.png"
            style={{ width: '45px', marginRight: '10px' }}
            alt="Logo"
          />
        </Navbar.Brand>

        {/* ===== DESKTOP MENU ============================================================================*/}
        <div className="d-none d-lg-flex align-items-center w-100">

          {/* NAV LINKS */}
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/#">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/#productos">
              Tienda
            </Nav.Link>

            <Nav.Link as={Link} to="/acercade">
              Acerca de
            </Nav.Link>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

          </Nav>

          {/* SEARCH */}
          <div className="search-bar-container me-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="bi bi-search search-icon"></i>
          </div>

          {/* CARRITO */}
          <Link to="/carrito" className="cart-icon-container me-3 position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
            {totalItems > 0 && (
              <Badge pill bg="danger" className="position-absolute top-10 start-100 translate-middle">
                {totalItems}
              </Badge>
            )}
          </Link>

          {/* LOGIN */}
          <Link to="/login" className="text-white icon-login">
            <i className="bi bi-person fs-4"></i>
          </Link>

        </div>


        {/* MOBILE: buscar, carrito, toggle ===========================================================================*/}
        <div className="d-flex align-items-center ms-auto d-lg-none">

          {/* SEARCH */}
          <div className="search-bar-container me-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="bi bi-search search-icon"></i>
          </div>

          {/* CARRITO */}
          <Link to="/carrito" className="cart-icon-container me-3 position-relative"
            onClick={() => setExpanded(false)}   // <<-- cerrar menú al navegar
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
            {totalItems > 0 && (
              <Badge pill bg="danger" className="position-absolute top-10 start-100 translate-middle">
                {totalItems}
              </Badge>
            )}
          </Link>

          {/* TOGGLE CONTROLADO */}
          <Navbar.Toggle
            className="custom-toggle-button d-lg-none"
            onClick={() => setExpanded(true)}
          />
        </div>

        <Offcanvas
          show={expanded}
          onHide={() => setExpanded(false)}
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>

            {/* NAV LINKS */}
            <Nav className="flex-column">

              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>

               <Nav.Link as={Link} to="/#productos" onClick={() => setExpanded(false)}>
                Tienda
              </Nav.Link>

              <Nav.Link as={Link} to="/acercade" onClick={() => setExpanded(false)}>
                Acerca de
              </Nav.Link>

              <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>
                Contacto
              </Nav.Link>

              <hr className="text-white" />

              {/* LOGIN */}
              <Link
                to="/login"
                className="text-white icon-login"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-person fs-4"></i> Ingresar / Registrarse
              </Link>

            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
    </Navbar>
  );
};

export default Header;
