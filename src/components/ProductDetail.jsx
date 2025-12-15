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
                    <h2 className="fw-bold">{producto.title}</h2>

                    <h3 className="text-success fw-bold">
                        ${producto.price}
                    </h3>

                    <Badge bg={stock > 0 ? 'success' : 'danger'}>
                        {stock > 0 ? 'En stock' : 'Sin stock'}
                    </Badge>

                    <div className="d-flex align-items-center gap-3 my-4">
                        <span>Cantidad</span>
                        <input
                            type="number"
                            min={1}
                            max={stock}
                            value={cantidad}
                            onChange={(e) => setCantidad(Number(e.target.value))}
                            className="form-control"
                            style={{ width: '80px' }}
                        />
                    </div>

                    <Button
                        disabled={stock === 0}
                        style={{
                            backgroundColor: '#00ff99',
                            color: '#000',
                            border: 'none',
                            fontWeight: 'bold'
                        }}
                        className="w-100 py-3"
                        onClick={() => agregarAlCarrito({ ...producto, cantidad })}
                    >
                        AGREGAR AL CARRITO
                    </Button>

                    <hr className="my-4" />

                    <h5>Descripción</h5>
                    <p>{producto.description}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetail;
