import { Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItemMobile = ({ item, onDelete }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const priceNumber = Number(item.price.replace(/\./g, ""));

  return (
    <div className="d-flex bg-light rounded shadow-sm p-2 align-items-center mt-3">

      {/* Imagen */}
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "90px", height: "90px", objectFit: "cover" }}
        className="rounded me-3 border"
      />

      {/* Info */}
      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold">{item.title}</h6>

        <small className="text-muted d-block">
          Precio unitario: ${priceNumber.toLocaleString("es-AR")}
        </small>

        <span className="fw-bold">
          Total: ${(priceNumber * item.cantidad).toLocaleString("es-AR")}
        </span>
      </div>

      {/* Stepper cantidad */}
            <div className="d-flex align-items-center me-5">
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-2"
                onClick={() => decreaseQuantity(item.id)}
              >
                −
              </Button>

              <Badge bg="light" text="dark" className="mx-2 px-3 py-2 border">
                {item.cantidad}
              </Badge>

              <Button
                variant="outline-secondary"
                size="sm"
                className="px-2"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </Button>
            </div>

      {/* Eliminar */}
      <Button
        variant="danger"
        size="sm"
        className="ms-2"
        onClick={() => onDelete(item.id)}
      >
        <i className="bi bi-trash-fill"></i>
      </Button>
    </div>
  );
};

export default CartItemMobile;
