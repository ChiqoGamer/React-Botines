import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Badge, Spinner } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import '../global.css';

const API_URL = 'https://68f82478deff18f212b543ab.mockapi.io/Botines';

const ProductDetail = () => {
    const { id } = useParams(); // ⬅️ ID DE LA URL
    const { agregarAlCarrito } = useContext(CartContext);

    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const prod = data.find(p => String(p.id) === String(id));
                setProducto(prod);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Spinner animation="border" className="text-light" />;
    }

    if (!producto) {
        return <h3 className="text-white text-center">Producto no encontrado</h3>;
    }

    const stock = producto.stock ?? 10;

    return (
        <div className="container my-5 text-white">
            <Row className="g-5">
                {/* IMAGEN */}
                <Col lg={6} className='mt-3'>
                    <div className="product-image-wrapper">
                        <img
                            src={producto.image}
                            alt={producto.title}
                            className="product-image"
                        />
                    </div>
                </Col>


                {/* INFO */}
                <Col lg={6} className='mt-3'>
                    <h2 className="">{producto.title}</h2>
                    <Badge bg={stock > 0 ? 'success' : 'danger'}>
                        {stock > 0 ? 'En stock' : 'Sin stock'}
                    </Badge>

                    <h1 className="fw-bold">
                        ${producto.price}
                    </h1>


                    <div className="d-flex align-items-center gap-3 my-4">
                        {/* CONTADOR */}
                        <div className="quantity-selector">
                            <button
                                className="qty-btn"
                                onClick={() => setCantidad(prev => Math.max(1, prev - 1))}
                            >
                                −
                            </button>

                            <span className="qty-number">{cantidad}</span>

                            <button
                                className="qty-btn"
                                onClick={() => setCantidad(prev => Math.min(stock, prev + 1))}
                            >
                                +
                            </button>
                        </div>

                        {/* BOTÓN AGREGAR */}
                        <Button
                            disabled={stock === 0}
                            className="add-cart-btn w-100 "
                            onClick={() => agregarAlCarrito({ ...producto, cantidad })}
                        >
                            <i class="bi bi-cart-fill"></i> AGREGAR
                        </Button>
                    </div>

                    <hr className="my-4" />

                    <h5>Descripción</h5>
                    <p>{producto.description}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetail;
