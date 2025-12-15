import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
  const cantidadAAgregar = producto.cantidad ?? 1;

  setCarrito((prevCarrito) => {
    const existe = prevCarrito.find(item => item.id === producto.id);

    if (existe) {
      return prevCarrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidadAAgregar }
          : item
      );
    }

    return [
      ...prevCarrito,
      { ...producto, cantidad: cantidadAAgregar }
    ];
  });

  toast.success('¡Agregado al carrito! ⚽🔥');
};


  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  // Vaciar el carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};