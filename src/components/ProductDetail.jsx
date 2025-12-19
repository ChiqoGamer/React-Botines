import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Row,
    Col,
    Button,
    Badge,
    Spinner,
    Carousel
} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import '../global.css';

const API_URL = 'https://68f82478deff18f212b543ab.mockapi.io/Botines';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { agregarAlCarrito } = useContext(CartContext);

    const [producto, setProducto] = useState(null);
    const [similares, setSimilares] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const prod = data.find(p => String(p.id) === String(id));
                setProducto(prod);
                setActiveImage(prod?.images?.[0] ?? prod?.image);

                if (prod) {
                    const relacionados = data.filter(p =>
                        p.marca?.toLowerCase() === prod.marca?.toLowerCase() &&
                        p.id !== prod.id
                    );
                    setSimilares(relacionados);
                }

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

    // Agrupa productos de 4 en 4 para el carrusel
    const chunkedSimilares = [];
    for (let i = 0; i < similares.length; i += 4) {
        chunkedSimilares.push(similares.slice(i, i + 4));
    }

    return (
        <div className="container my-5 text-white">
            {/* ================= PRODUCTO ================= */}
            <Row className="g-5">
                <Col lg={6} className="d-flex gap-3">
                    <div className="d-flex flex-column gap-2">
                        {(producto.images ?? [producto.image]).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumb-${index}`}
                                onClick={() => setActiveImage(img)}
                                style={{
                                    width: 70,
                                    height: 70,
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    border: activeImage === img ? '2px solid #00ff99' : '1px solid #333',
                                    borderRadius: 8
                                }}
                            />
                        ))}
                    </div>

                    <div className="product-image-wrapper">
                        <img
                            src={activeImage}
                            alt={producto.title}
                            className="product-image"
                        />
                    </div>
                </Col>

                <Col lg={6}>
                    <h2>{producto.title}</h2>

                    <Badge bg={stock > 0 ? 'success' : 'danger'}>
                        {stock > 0 ? 'En stock' : 'Sin stock'}
                    </Badge>

                    <h1 className="fw-bold mt-3">${producto.price}</h1>

                    <div className="d-flex align-items-center gap-3 my-4">
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

                        <Button
                            disabled={stock === 0}
                            className="add-cart-btn w-100"
                            onClick={() => agregarAlCarrito({ ...producto, cantidad })}
                        >
                            <i className="bi bi-cart-fill"></i> AGREGAR
                        </Button>
                    </div>

                    <hr />

                    <h5>Descripción</h5>
                    <p>{producto.description}</p>
                </Col>
            </Row>

            {/* ================= PRODUCTOS SIMILARES ================= */}
            {similares.length > 0 && (
                <section className="mt-5">
                    <h4 className="mb-4">
                        Más productos de {producto.marca}
                    </h4>

                    {/* ===== MOBILE → SCROLL HORIZONTAL ===== */}
                    <div className="d-block d-md-none">
                        <div
                            className="d-flex gap-3 pb-2"
                            style={{
                                overflowX: 'auto',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {similares.map(prod => (
                                <div
                                    key={prod.id}
                                    className="bg-white text-dark rounded p-3"
                                    style={{
                                        minWidth: '240px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => navigate(`/producto/${prod.id}`)}
                                >
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        style={{
                                            width: '100%',
                                            height: '160px',
                                            objectFit: 'cover',
                                            borderRadius: 8
                                        }}
                                    />

                                    <h6 className="mt-3 fw-bold">
                                        {prod.title}
                                    </h6>

                                    <strong className="d-block mt-1">
                                        ${prod.price}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== DESKTOP → CARRUSEL ===== */}
                    <div className="d-none d-md-block">
                        <Carousel
                            indicators={false}
                            controls
                            interval={null}
                            className="custom-carousel"
                        >

                            {chunkedSimilares.map((grupo, index) => (
                                <Carousel.Item key={index}>
                                    <Row className="g-4">
                                        {grupo.map(prod => (
                                            <Col key={prod.id} lg={3} md={4}>
                                                <div
                                                    className="bg-white text-dark rounded p-3 h-100"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => navigate(`/producto/${prod.id}`)}
                                                >
                                                    <img
                                                        src={prod.image}
                                                        alt={prod.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '180px',
                                                            objectFit: 'cover',
                                                            borderRadius: 8
                                                        }}
                                                    />

                                                    <h6 className="mt-3 fw-bold">
                                                        {prod.title}
                                                    </h6>

                                                    <strong className="d-block mt-1">
                                                        ${prod.price}
                                                    </strong>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            )}

        </div>
    );
};

export default ProductDetail;
