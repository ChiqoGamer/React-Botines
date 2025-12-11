import { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    toast.error('Producto eliminado del carrito 🗑️');
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
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        // theme="colored"
        theme='dark'
        style={{ textAlign: "center" }}               // Estilos del contenedor del toast
      />
      <Container className="mt-4 mb-5">
        <h3 className="text-white">Descripción de tu pedido</h3>
        {/* Centrado vertical y horizontal en toda la tabla */}
        <Table striped bordered hover responsive className="mt-3 text-center">
          <thead>
            <tr>
              <th className="align-middle text-center">Producto</th>
              <th className="align-middle text-center">Precio unitario</th>
              <th className="align-middle text-center">Cantidad</th>
              <th className="align-middle text-center">Total</th>
              <th className="align-middle text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                {/* Alineado horizontal desde el inicio: imagen + título en fila */}
                <td className="align-middle text-start">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    {item.image?.startsWith('http') ? (
                      <img src={item.image} alt={item.title} width={50} height={50} />
                    ) : (
                      <span>{item.image}</span>
                    )}
                    <span>{item.title}</span>
                  </div>
                </td>

                <td className="align-middle text-center">${Number(item.price).toFixed(2)}</td>
                <td className="align-middle text-center">{item.cantidad}</td>
                <td className="align-middle text-center">${(Number(item.price) * item.cantidad).toFixed(2)}</td>
                <td className="align-middle text-center">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h5 className="text-end text-white">Total a pagar: ${total.toFixed(2)}</h5>
      </Container>
    </>
  );
};

export default Carrito;