import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function AdminLogin() {
  return (
    <Form
      style={{
        width: '50%' ,
        marginLeft: 'auto',
        marginRight: 'auto' ,
        marginTop: '50px',
        padding: '20px',
        textAlign: 'center',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }}
    >
      <h2>Kindly Login</h2>

      <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Button type="submit" style={{ background: '#154c79', width: '50%', margin: 'auto' }}>
          Sign in
        </Button>
      </Form.Group>
    </Form>
  );
}

export default AdminLogin;
