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

  const existe = carrito.find(item => item.id === producto.id);

  if (existe) {
    setCarrito(prev =>
      prev.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidadAAgregar }
          : item
      )
    );

    toast.success("Cantidad actualizada en carrito ⚽");
    return;
  }

  setCarrito(prev => [
    ...prev,
    { ...producto, cantidad: cantidadAAgregar }
  ]);

  toast.success("¡Agregado al carrito! ⚽🔥");
};



  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  // Vaciar el carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const increaseQuantity = (id) => {
  setCarrito(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCarrito(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter(item => item.cantidad > 0)
  );
};

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};