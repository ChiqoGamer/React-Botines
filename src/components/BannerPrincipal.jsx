import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BannerPrincipal = () => {
  // Colores principales
  const accent = '#00ff99';
  const buttonText = '#00221a';
  const gradientStart = '#03110f';
  const gradientEnd = '#00372f';

  // Estilos para el contenedor del banner (tarjeta con gradiente)
  const bannerStyle = {
    background: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
    borderRadius: '12px',    
    color: '#ffffff',
    overflow: 'hidden',
  };

  // Estilos del título y botón
  const titleStyle = {
    color: accent,
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: 1.05,
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '600px',
    marginBottom: '1.5rem',
    fontSize: '1.05rem',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(255, 255, 255, 1)',
    color: buttonText,
    borderRadius: '999px',
    padding: '0.6rem 1.2rem',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '520px',
    objectFit: 'contain',
    display: 'block',
  };

  const handleExploreClick = () => {
    const section = document.getElementById('productos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} className="mb-4">
      <Container style={bannerStyle}>
        <Row className="align-items-center">
          <Col md={7} className="d-flex flex-column justify-content-center align-items-start">
            <h1 style={titleStyle}>Descubre los mejores botines de fútbol</h1>
            <p style={subtitleStyle}>
              Explora nuestra colección de los últimos botines para jugadores de todos los niveles.
            </p>
            <Button style={buttonStyle} onClick={handleExploreClick}>Explorar Botines</Button>
          </Col>

          <Col md={5} className="d-flex justify-content-center align-items-center">
            <img src="/botinBanner.png" alt="Botín destacado" style={imageStyle} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BannerPrincipal;