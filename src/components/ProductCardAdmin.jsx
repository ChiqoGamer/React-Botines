// import { Button } from 'react-bootstrap';

// const ProductCardAdmin = ({ producto, onEdit, onDelete }) => {
//   return (
//     <div className="d-flex bg-light rounded shadow-sm mb-3 p-3 align-items-center">

//       {/* Imagen */}
//       <img
//         src={producto.image}
//         alt={producto.title}
//         style={{
//           width: '90px',
//           height: '90px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//         className="me-3"
//       />

//       {/* Info */}
//       <div className="flex-grow-1">
//         <h6 className="fw-bold mb-1">{producto.title}</h6>

//         <small className="text-muted d-block">
//           {producto.description.slice(0, 140)}...
//         </small>

//         <small className="d-block">
//           Precio: <strong>${Number(producto.price).toFixed(2)}</strong>
//         </small>

//         <small className="d-block">
//           Stock: <strong>{producto.stock}</strong>
//         </small>
//       </div>

//       {/* Acciones */}
//       <div className="d-flex flex-column gap-2 ms-2">
//         <Button
//           size="sm"
//           onClick={() => onEdit(producto)}
//         >
//           <i className="bi bi-pencil-square"></i>
//         </Button>

//         <Button
//           size="sm"
//           variant="danger"
//           onClick={() => onDelete(producto.id)}
//         >
//           <i className="bi bi-trash-fill"></i>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCardAdmin;
import { Button } from 'react-bootstrap';

const ProductCardAdmin = ({ producto, onEdit, onDelete }) => {
  return (
    <div className="bg-light rounded shadow-sm p-3 h-100">

      {/* 🔹 FILA 1: Imagen + info */}
      <div className="d-flex align-items-center mb-3">
        <img
          src={producto.image}
          alt={producto.title}
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
          className="me-3"
        />

        <div>
          <h6 className="fw-bold mb-1">{producto.title}</h6>
          <small className="d-block">
            Precio: <strong>${Number(producto.price).toFixed(2)}</strong>
          </small>
          <small className="d-block">
            Stock: <strong>{producto.stock}</strong>
          </small>
        </div>
      </div>

      {/* 🔹 FILA 2: Descripción */}
      <div className="mb-3">
        <small className="text-muted">
          {producto.description}
        </small>
      </div>

      {/* 🔹 FILA 3: Botones */}
      <div className="d-flex gap-2">
        <Button
          size="sm"
          className="w-100"
          onClick={() => onEdit(producto)}
        >
          <i className="bi bi-pencil-square me-1"></i>
          Editar
        </Button>

        <Button
          size="sm"
          variant="danger"
          className="w-100"
          onClick={() => onDelete(producto.id)}
        >
          <i className="bi bi-trash-fill me-1"></i>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
