import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo y descripción */}
          <Col md={4} className="mb-4">
            <h4 className="footer-title">React Botines</h4>
            <p className="footer-text">
              Donde la pasión por el fútbol se encuentra con el mejor estilo.
              Rendimiento, diseño y comodidad en cada paso ⚽.
            </p>
          </Col>

          {/* Enlaces */}
          <Col md={4} className="mb-4">
            <h5 className="footer-subtitle">Enlaces</h5>
            <ul className="footer-links">
              <li><Link to="/#">Home</Link></li>
              <li><Link to="/#productos">Tienda</Link></li>
              <li><Link to="/acercade">Acerca De</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>

          </Col>

          {/* Redes sociales */}
          <Col md={4} className="mb-4">
            <h5 className="footer-subtitle">Seguinos</h5>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="footer-copy">
              © {new Date().getFullYear()} React Botines — Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
