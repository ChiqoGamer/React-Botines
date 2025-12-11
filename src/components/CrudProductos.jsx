import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';

const API_URL = 'https://68f82478deff18f212b543ab.mockapi.io/Botines';

const CrudProductos = () => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', price: '', stock: '', image: '' });
  const [editId, setEditId] = useState(null);

  const getProductos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProductos(data);
  };

  const handleClose = () => {
    setShow(false);
    setForm({ title: '', description: '', price: '', stock: '', image: '' });
    setEditId(null);
  };

  const handleShow = (producto) => {
    setShow(true);
    if (producto) {
      setForm({
        ...producto,
        price: Number(producto.price),
        stock: Number(producto.stock)
      });
      setEditId(producto.id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock)
    };

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });

    handleClose();
    getProductos();
  };

  const eliminarProducto = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      getProductos();
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container mt-4">
      {/* Contenedor centrado para h2 y botón */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Administración de Productos</h2>
        <Button className="mb-3" onClick={() => handleShow()}>Agregar Producto</Button>
      </div>
      <Table striped bordered hover className='mb-5'>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(prod => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith('http') ? (
                  <img src={prod.image} alt={prod.title} width={50} />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>
                {/* Botones en columna con mismo ancho y gap vertical */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '130px' }}>
                  <Button size="sm" style={{ width: '100%' }} onClick={() => handleShow(prod)}>Editar</Button>
                  <Button size="sm" variant="danger" style={{ width: '100%' }} onClick={() => eliminarProducto(prod.id)}>Eliminar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Editar' : 'Agregar'} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={form.stock}
                onChange={e => setForm({ ...form, stock: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-2">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrudProductos;