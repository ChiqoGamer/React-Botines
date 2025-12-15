import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../global.css';

const ProductCard = ({ product, agregarAlCarrito }) => {
  const buttonColor = '#00ff99';
  const textButtonColor = '#ffffffff';
  // const backgroundColor = '#000000ff'
  const backgroundColor = '#009471aa';
  // const backgroundColor = '#03624cff';

  return (

    <Card className="h-100 d-flex flex-column" style={{ backgroundColor: backgroundColor, color: textButtonColor }}>
      <Link to={`/producto/${product.id}`}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid"
        style={{ height: '200px', objectFit: 'cover' }}
      />
            </Link>


      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 100)}...
        </Card.Text>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button variant="primary"
          className="btn-agregar"
          style={{ backgroundColor: buttonColor, borderColor: buttonColor, color:'#000000ff', marginTop: 'auto', fontWeight: 'bold' }}
          onClick={() => agregarAlCarrito(product)}>
          AGREGAR
        </Button>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;
