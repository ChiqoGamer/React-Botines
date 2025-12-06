import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
      alert('Usuario o contraseña incorrectos');
    }
  };

return (
  <Container className="d-flex justify-content-center align-items-center">
    <Row className="w-100 justify-content-center mt-5 mb-5">
      <Col md={6} lg={4}>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>

            <Form onSubmit={handleSubmit}>
              {/* Usuario */}
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Contraseña */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);


};

export default Login;
