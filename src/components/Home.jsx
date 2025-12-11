import { useState } from 'react';
import BannerPrincipal from './BannerPrincipal';
import ProductList from './ProductList';
import { Button, ButtonGroup } from 'react-bootstrap';

const Home = () => {
  const [filtro, setFiltro] = useState("All");

  return (
    <div className="container">
      <BannerPrincipal />

      <div id="productos">
        <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
          <h1 style={{ color: '#00ff99', fontSize: '2rem' }}>
            Productos Destacados
          </h1>

          {/* 🔘 BOTONES DE FILTRO */}
          <ButtonGroup>
            {/* <Button
              variant={filtro === "All" ? "light" : "outline-light"}
              onClick={() => setFiltro("All")}
              className="px-3"
            >
              All
            </Button>   

            <Button
              variant={filtro === "Adidas" ? "light" : "outline-light"}
              onClick={() => setFiltro("Adidas")}
              className="px-3"
            >
              Adidas
            </Button>

            <Button
              variant={filtro === "Nike" ? "light" : "outline-light"}
              onClick={() => setFiltro("Nike")}
              className="px-3"
            >
              Nike
            </Button>

            <Button
              variant={filtro === "Puma" ? "light" : "outline-light"}
              onClick={() => setFiltro("Puma")}
              className="px-3"
            >
              Puma
            </Button> */}
             <Button
              style={{
                backgroundColor: filtro === "All" ? "#00ff99" : "transparent",
                color: filtro === "All" ? "#000" : "#00ff99",
                borderColor: "#00ff99"
              }}
              onClick={() => setFiltro("All")}
              className="px-3"
            >
              All
            </Button>
            <Button
              style={{
                backgroundColor: filtro === "Adidas" ? "#00ff99" : "transparent",
                color: filtro === "Adidas" ? "#000" : "#00ff99",
                borderColor: "#00ff99"
              }}
              onClick={() => setFiltro("Adidas")}
              className="px-3"
            >
              Adidas
            </Button>
            <Button
              style={{
                backgroundColor: filtro === "Nike" ? "#00ff99" : "transparent",
                color: filtro === "Nike" ? "#000" : "#00ff99",
                borderColor: "#00ff99"
              }}
              onClick={() => setFiltro("Nike")}
              className="px-3"
            >
              Nike
            </Button>
            <Button
              style={{
                backgroundColor: filtro === "Puma" ? "#00ff99" : "transparent",
                color: filtro === "Puma" ? "#000" : "#00ff99",
                borderColor: "#00ff99"
              }}
              onClick={() => setFiltro("Puma")}
              className="px-3"
            >
              Puma
            </Button>
          </ButtonGroup>
        </div>

        <ProductList filtro={filtro} />
      </div>
    </div>
  );
};

export default Home;
