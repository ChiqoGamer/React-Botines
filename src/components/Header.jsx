import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="mb-4 custom-navbar fixed-top"
      expanded={expanded}
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex align-items-center me-4"
          onClick={() => setExpanded(false)}
        >
          <img
            src="reactBotines.png"
            style={{ width: '45px', marginRight: '10px' }}
            alt="Logo"
          />
        </Navbar.Brand>

        {/* ⭐ LINKS A LA IZQUIERDA (SOLO DESKTOP) */}
        <Nav className="d-none d-lg-flex align-items-center ms-3">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/acercade" className="me-3">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>
        </Nav>

        {/* MOBILE: buscar, carrito, toggle */}
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
          <Link 
            to="/carrito" 
            className="cart-icon-container me-3 position-relative"
            onClick={() => setExpanded(false)}
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
            aria-controls="menu-responsive"
            className="custom-toggle-button"
            onClick={() => setExpanded(expanded ? false : true)}
          />
        </div>

        {/* MENU DESPLEGABLE */}
        <Navbar.Collapse id="menu-responsive">

          {/* ⭐ LINKS SOLO EN MOBILE */}
          <Nav className="d-lg-none d-flex flex-column mt-3">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/acercade" onClick={() => setExpanded(false)}>Acerca de</Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>

          {/* DESKTOP: search + cart + login */}
          <div className="d-none d-lg-flex align-items-center ms-auto">

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

            <Link to="/carrito" className="cart-icon-container me-3 position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-10 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>

            <Link to="/login" className="text-white icon-login">
              <i className="bi bi-person fs-4"></i>
            </Link>
          </div>

          {/* MOBILE: login */}
          <div className="d-lg-none">
            <Link 
              to="/login" 
              className="text-white icon-login"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-person fs-4"></i> Ingresar / Registrarse
            </Link>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
