import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
    setMessageSent(true);
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container className={styles.container}>
        <h1>Contact Us</h1>
        <p>Address: 1234 Winners Way, Las Vegas, NV 89103</p>
        <p>Phone: (702) 123-4567</p>
        <p>Hours: Monday - Friday 9am to 5pm</p>

        <Row>
          <Col lg={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br></br>
              <div className="d-flex justify-content-center">
                <Button type="submit">Send Message</Button>
              </div>
            </Form>
            {messageSent && <p className={styles.messageSent}>Message Sent</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
