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

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-4">
          <img
            src="/reactBotines.png"
            style={{ width: '45px', marginRight: '10px' }}
            alt="Logo"
          />
        </Navbar.Brand>

        {/* LINKS PEGADOS AL LOGO */}
        <Nav className="align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/acercade" className="me-3">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>
        </Nav>

        {/* ICONOS A LA DERECHA */}
        <div className="ms-auto d-flex align-items-center">

          {/* Carrito */}
          <Link to="/carrito" className="me-3">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
          </Link>

          {/* Usuario */}
          <Button 
            as={Link} 
            to="/login" 
            className="p-0 bg-transparent border-0 shadow-none"
          >
            <i className="bi bi-person fs-4" style={{ color: "#00ff99" }}></i>
          </Button>
        </div>

      </Container>
    </Navbar>

    // <Navbar expand="lg" className="mb-4 custom-navbar">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
    //       <span>
    //         <img src="/reactBotines.png" style={{ width: '45px', marginRight: '10px' }} alt="Logo" />
    //       </span>
    //     </Navbar.Brand>

    //     <Nav className="ms-auto align-items-center">
    //       <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
    //       <Nav.Link as={Link} to="/acercade" className="me-3">Acerca de</Nav.Link>
    //       <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>

    //       <div className="d-flex align-items-center">
    //         <Link to="/carrito">
    //           <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-shopping-cart" />
    //         </Link>

    //         <Button
    //           as={Link}
    //           to="/login"
    //           className="me-4 p-0 bg-transparent border-0 shadow-none ms-4"
    //           style={{ boxShadow: "none", color: "#00ff99" }}
    //         >
    //           <i className="bi bi-person fs-4"></i>
    //         </Button>

    //       </div>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default Header;

