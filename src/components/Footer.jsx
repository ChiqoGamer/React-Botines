// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'font-awesome/css/font-awesome.min.css'; 

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white text-center py-4 mt-4">
//       <Container>
//         <Row>
//           <Col md={6}>
//             <p className="mb-0">Todo por 2 pesos</p>
//             <p className="mb-0">Avenida Siempre viva 742, Springfield</p>
//           </Col>
//           <Col md={6}>
//             <div>
//               <a href="#" className="text-white me-3">
//                 <i className="fa fa-facebook fa-2x"></i>
//               </a>
//               <a href="#" className="text-white me-3">
//                 <i className="fa fa-twitter fa-2x"></i>
//               </a>
//               <a href="#" className="text-white">
//                 <i className="fa fa-instagram fa-2x"></i>
//               </a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
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
              <li><a href="/">Home</a></li>
              <li><a href="/ofertas">Ofertas</a></li>
              <li><a href="/infaltables">Infaltables</a></li>
              <li><a href="/administracion">Administración</a></li>
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
