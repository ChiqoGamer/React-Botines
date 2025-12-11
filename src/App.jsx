import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/CartContext";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import CrudProductos from "./components/CrudProductos";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/acercade" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <CrudProductos />
                </PrivateRoute>
              }
            />
          </Routes>

          <Footer />
        </Router>

        </CartProvider>
    </AuthProvider>
  );
}

export default App;
