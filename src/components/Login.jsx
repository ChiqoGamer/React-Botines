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
    <>
      <style>{`
 
  .login-card { 
    background-color: #ffffffff !important;      
    border-radius: 12px;
  }
  .input-dark {
    background-color: #ffffffff !important;
    //border: 1px solid #007a57 !important;
    color: white !important;
  }
  .input-dark::placeholder {
    color: #00ffff73 !important;
  }
  .login-btn {
    background-color: #00ff88 !important;
    border: none !important;
    color: black !important;
    font-weight: bold;
  }
  .login-btn:hover {
    background-color: #00e676 !important;
    color: #002c21 !important;
  }
`}</style>

      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-lg p-4 login-card">
              <Card.Body>
                <h2 className="text-center mb-4 text-dark">Iniciar Sesión</h2>

                <Form onSubmit={handleSubmit}>

                  {/* Usuario */}
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label className="text-dark">Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-dark"
                      required
                    />
                  </Form.Group>

                  {/* Contraseña */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="text-dark">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-dark"
                      required
                    />
                  </Form.Group>

                  <Button variant="success" type="submit" className="w-100 login-btn">
                    Ingresar
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );



};

export default Login;
