import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Navbar expand="lg" className="mb-4 custom-navbar fixed-top">

      <Container>

        {/* LOGO / LINKS A LA IZQUIERDA */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-4">
          <img
            src="reactBotines.png"
            style={{ width: '45px', marginRight: '10px' }}
            alt="Logo"
          />
        </Navbar.Brand>

        {/* NAV ITEMS A LA IZQUIERDA */}
        <Nav className="d-flex align-items-center nav-with-separator">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/acercade" className="me-3">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="me-3"></Nav.Link>
        </Nav>

        {/* ICONOS A LA DERECHA */}
        <div className="ms-auto d-flex align-items-center">

          {/* BARRA DE BUSQUEDA */}
          <div className="search-bar-container me-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
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

      </Container>
    </Navbar>
  );
};

export default Header;
