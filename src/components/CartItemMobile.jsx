import { Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItemMobile = ({ item, onDelete }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const priceNumber = Number(item.price.replace(/\./g, ""));

  return (
    <>
      {/* ================= DESKTOP / TABLET ================= */}
      <div className="d-none d-md-flex bg-light rounded shadow-sm p-2 align-items-center mt-3">

        <img
          src={item.image}
          alt={item.title}
          style={{ width: "90px", height: "90px", objectFit: "cover" }}
          className="rounded me-3 border"
        />

        <div className="flex-grow-1">
          <h6 className="mb-1 fw-bold">{item.title}</h6>
          <small className="text-muted d-block">
            Precio unitario: ${priceNumber.toLocaleString("es-AR")}
          </small>
          <span className="fw-bold">
            Total: ${(priceNumber * item.cantidad).toLocaleString("es-AR")}
          </span>
        </div>

        {/* Stepper */}
        <div className="d-flex align-items-center me-5">
          <Button size="sm" variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>−</Button>
          <Badge bg="light" text="dark" className="mx-2 px-3 py-2 border">
            {item.cantidad}
          </Badge>
          <Button size="sm" variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
        </div>

        {/* Eliminar */}
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(item.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </Button>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="d-flex d-md-none position-relative bg-light rounded shadow-sm p-3 align-items-center mt-3">

        <img
          src={item.image}
          alt={item.title}
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          className="rounded me-3 border"
        />

        <div className="flex-grow-1 pe-5">
          <h6 className="mb-1 fw-bold">{item.title}</h6>
          <small className="text-muted d-block">
            Precio unitario: ${priceNumber.toLocaleString("es-AR")}
          </small>
          <span className="fw-bold">
            Total: ${(priceNumber * item.cantidad).toLocaleString("es-AR")}
          </span>
        </div>

        {/* Eliminar arriba derecha */}
        <Button
          variant="danger"
          size="sm"
          className="position-absolute top-0 end-0 m-2"
          onClick={() => onDelete(item.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </Button>

        {/* Stepper abajo derecha */}
        <div className="position-absolute bottom-0 end-0 m-2 d-flex align-items-center">
          <Button size="sm" variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>−</Button>
          <Badge bg="light" text="dark" className="mx-2 px-3 py-2 border">
            {item.cantidad}
          </Badge>
          <Button size="sm" variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
        </div>
      </div>
    </>
  );
};

export default CartItemMobile;
