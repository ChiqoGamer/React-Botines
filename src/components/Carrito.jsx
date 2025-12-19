import { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartItemMobile from './CartItemMobile';
import '../global.css';


const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const finalizarCompra = () => {
    toast.success("Compra realizada con éxito 🎉", {
      autoClose: 2000,
      position: "top-center",
      onClose: () => setCarrito([])
    });
  };


  const eliminarDelCarrito = (id) => {
    toast.error('Producto eliminado del carrito 🗑️');
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price.replace(/\./g, "")) * item.cantidad, 0);
  
  return (
    <>
      <Container >

        <Container className="mt-4 mb-5 ">
          <h3 className="text-white mb-4">Descripción de tu pedido</h3>

          <div className="row">
            {/* 🛒 Columna tabla */}
            <div className="col-lg-8 mb-4">
              {carrito.length === 0 ? (
                <h8 className="text-white mb-4">No hay items en el carrito</h8>
              ) : (
                <div>
                  <div className="d-none ">
                    <Table striped bordered hover responsive className="text-center">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Precio unitario</th>
                          <th>Cantidad</th>
                          <th>Total</th>
                          <th>Acción</th>
                        </tr>
                      </thead>

                      <tbody>
                        {carrito.map((item) => (
                          <tr key={item.id}>
                            <td className="align-middle text-start">
                              <div className="d-flex align-items-center gap-2">
                                {item.image?.startsWith('http') ? (
                                  <img src={item.image} alt={item.title} width={50} height={50} />
                                ) : (
                                  <span>{item.image}</span>
                                )}
                                <span>{item.title}</span>
                              </div>
                            </td>

                            <td className="align-middle">${Number(item.price).toFixed(2)}</td>

                            <td className="align-middle">{item.cantidad}</td>

                            <td className="align-middle">
                              ${(Number(item.price) * item.cantidad).toFixed(2)}
                            </td>

                            <td className="align-middle">
                              <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(item.id)}>
                                <i className="bi bi-trash-fill"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-block d-lg">
                    {carrito.map(item => (
                      <CartItemMobile
                        key={item.id}
                        item={item}
                        onDelete={eliminarDelCarrito}
                      />
                    ))}
                  </div>
                </div>


              )}
            </div>

            {/* 📦 Columna caja resumen */}
            <div className="col-lg-4 mt-3">
              <div className="p-4 border rounded shadow-sm bg-light">
                <h5 className="fw-bold mb-3">Resumen de tu compra</h5>

                <div className="d-flex justify-content-between">
                  <span>Productos</span>
                  <span className="fw-bold">{carrito.length}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold fs-5 text-dark">
                    $ {total.toLocaleString("es-AR")}
                  </span>
                </div>

                <Button className="w-100 mt-3 fw-bold btn-finalizar" 
                  onClick={() => finalizarCompra()}>
                  FINALIZAR COMPRA
                </Button>

                <Button variant="outline-dark " className="w-100 mt-3" as={Link} to="/#productos">
                  AGREGAR MÁS PRODUCTOS
                </Button>

                <Button variant="link" className="w-100 mt-2 text-dark" onClick={() => setCarrito([])}>
                  LIMPIAR CARRITO
                </Button>

              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );

};

export default Carrito;