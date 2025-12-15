import { Button } from 'react-bootstrap';

const CartItemMobile = ({ item, onDelete }) => {
  return (
    <div className="d-flex bg-light rounded shadow-sm p-2 align-items-center mt-3">

      {/* Imagen */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "90px",
          height: "90px",
          objectFit: "cover"
        }}
        className="me-3"
      />

      {/* Info */}
      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold">{item.title}</h6>

        <small className="text-muted d-block">
          Cantidad: {item.cantidad}
        </small>

        <small className="text-muted d-block">
          Precio unitario: ${Number(item.price).toFixed(3)}
        </small>

        <span className="fw-bold">
          Total: ${(item.price * item.cantidad).toFixed(3)}
        </span>
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
