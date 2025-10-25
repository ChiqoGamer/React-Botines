import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="mb-4 custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span>
           <img src="../../public/reactBotines.png" style={{ width: '45px', marginRight: '10px' }} alt="Logo" />
            React Botines</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/acercade" className="me-3">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/login" className="me-2">
              Login 
            </Button>
            <Link to="/carrito">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
 
