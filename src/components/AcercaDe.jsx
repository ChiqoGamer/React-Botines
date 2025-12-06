import { Container, Row, Col, Card } from "react-bootstrap";

function AcercaDe() {
  return (
    <>
      <style>{`
        .about-section {
          color: #e8fff5;
          padding: 60px 0;
          min-height: 90vh;
        }

        .about-equal {
          height: 100%;
        }

        /* CARD */
        .about-card {
          background-color: #003b29;
          border: 1px solid #00ff88;
          border-radius: 14px;
          padding: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* TITULO */
        .about-title {
          color: #00ff88;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
        }

        /* TEXTO */
        .about-text {
          line-height: 1.6;
          font-size: 1.1rem;
          color: #c6ffe8;
        }

        .about-highlight {
          color: #00ff88;
          font-weight: bold;
        }

        /* IMAGEN IGUAL ALTURA */
        .about-img-wrapper {
          height: 100%;
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
          border: 2px solid #00ff88;
          box-shadow: 0 0 12px #00ff8855;
        }

        @media (max-width: 768px) {
          .about-img-wrapper {
            height: auto;
          }
          .about-img {
            height: auto;
          }
        }
      `}</style>

      <section className="about-section">
        <Container>
          <Row className="align-items-stretch">
            
            {/* IMAGEN */}
            <Col md={6} className="mb-4">
              <div className="about-img-wrapper">
                <img                
                  src="https://assets.goal.com/images/v3/bltebd92064b1476dd4/H24587-WC26_OMB_Global_Product_Pro_Ball_Family_Shot_2_16x9-1355532.jpg?auto=webp&format=pjpg&width=640&quality=60"
                  alt="React Botines"
                  className="about-img"
                />
              </div>
            </Col>

            {/* CARD */}
            <Col md={6} className="mb-4">
              <Card className="about-card shadow-lg">
                <h2 className="about-title">Acerca de React Botines</h2>
                <p className="about-text">
                  En <span className="about-highlight">React Botines</span> nos apasiona el fútbol
                  y creemos que cada jugador merece el mejor calzado para
                  rendir al máximo.
                </p>

                <p className="about-text">
                  Nos especializamos en{" "}
                  <span className="about-highlight">botines de alto rendimiento</span>, diseñados
                  para brindar velocidad, control y comodidad.
                </p>

                <p className="about-text">
                  Si respirás fútbol, este es tu lugar.
                </p>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default AcercaDe;
