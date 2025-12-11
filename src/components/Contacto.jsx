import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import "./Contacto.css";

const Contacto = () => {
  const styles = {
    col: {
      minHeight: "450px"
    },
       iframe: {
      border: 0,
      height: "100%",
      width: "100%"
    }
};

return (
  <>
   <style>{`
  .input-dark {
    background-color: #00ff8816 !important;
    // border: 1px solid #007a57 !important;
    color: black !important;
  }

  .input-dark::placeholder {
    color: #00000075 !important;
  }

  .input-dark:focus {
    background-color: #00ff882f !important;
    border-color: #007a57 !important;
    box-shadow: 0 0 0 0.2rem rgba(0, 255, 136, 0.3) !important;
  }

  .login-btn {
    background-color: #00ff88 !important;
    border: none !important;
    color: black !important;
    font-weight: bold;
  }
  .login-btn:hover {
    background-color: #00e676 !important;
    color: #002c21 !important;
  }

  .about-card {
    background-color: #003b29;
    border: 1px solid #00ff88;
    border-radius: 14px;
    color: #fff;
  }
`}</style>

    <Container className="mt-5 mb-5">
      <Row className="justify-content-center align-items-stretch">
        {/* Datos + Mapa divididos verticalmente */}
        <Col md={6} className="mb-4 d-flex flex-column" style={styles.col}>
          <Card className="p-4 shadow-lg contacto-card flex-fill mb-3 about-card"  >
            <h4 className="mb-5" style={{ color: "#00ff88" }} >Datos de contacto</h4>
            <p><strong><i class="bi bi-telephone-fill"style={{ color: "#00ff88", marginRight:"1rem" }} ></i> Teléfono:</strong> +54 11 7654 3210</p>
            <p><strong><i class="bi bi-envelope-fill"style={{ color: "#00ff88", marginRight:"1rem"  }} ></i> Email:</strong> contacto@reactbotines.com</p>
            <p><strong><i class="bi bi-geo-alt-fill"style={{ color: "#00ff88", marginRight:"1rem"  }} ></i> Dirección:</strong> Av. Futbol 123, Buenos Aires</p>
          </Card>

          <Card className="shadow-lg contacto-card overflow-hidden flex-fill" style={styles.card}>
            <iframe title="Mapa" style={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.073324036094!2d-58.38414568477094!3d-34.60368458045962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334e6f95adf0b%3A0x2f4b78d4bbfdfc82!2sObelisco!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>

        {/* Formulario a la derecha */}
        <Col md={6} className="mb-4">
          <Card className="p-4 shadow-lg contacto-card text-dark">
            <h2 className="text-center mb-4">Contacto</h2>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label >Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresá tu nombre" className="input-dark" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresá tu email" className="input-dark"
                  required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label >Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Escribí tu mensaje" className="input-dark"
                  required />
              </Form.Group>

              <Button variant="primary" className="w-100 mt-2 login-btn">
                Enviar mensaje
              </Button>
            </Form>
          </Card>
        </Col>

      </Row>
    </Container>
  </>
);
};

export default Contacto;
