import { Button } from 'react-bootstrap';

const ProductCardAdmin = ({ producto, onEdit, onDelete }) => {
  return (
    <div className="d-flex bg-light rounded shadow-sm mb-3 p-3 align-items-center">

      {/* Imagen */}
      <img
        src={producto.image}
        alt={producto.title}
        style={{
          width: '90px',
          height: '90px',
          objectFit: 'cover'
        }}
        className="me-3"
      />

      {/* Info */}
      <div className="flex-grow-1">
        <h6 className="fw-bold mb-1">{producto.title}</h6>

        <small className="text-muted d-block">
          {producto.description.slice(0, 140)}...
        </small>

        <small className="d-block">
          Precio: <strong>${Number(producto.price).toFixed(2)}</strong>
        </small>

        <small className="d-block">
          Stock: <strong>{producto.stock}</strong>
        </small>
      </div>

      {/* Acciones */}
      <div className="d-flex flex-column gap-2 ms-2">
        <Button
          size="sm"
          onClick={() => onEdit(producto)}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button
          size="sm"
          variant="danger"
          onClick={() => onDelete(producto.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
