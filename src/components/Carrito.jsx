import { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-4 mb-5" style={{ minHeight: "75vh" }}>
        <h3 className="text-white" >Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4 mb-5">
      <h3 className="text-white">Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                {/* Centrar el botón dentro de la celda */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end text-white">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;