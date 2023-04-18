import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
} from 'react-bootstrap';

const PaymentInformation = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      cardNumber,
      expMonth,
      expYear,
      cvv,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
    };
    setCardInfo([...cardInfo, newCard]);
    setCardNumber('');
    setExpMonth('');
    setExpYear('');
    setCvv('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
  };

  const deleteCard = (index) => {
    setCardInfo(cardInfo.filter((_, i) => i !== index));
  };

  const maskCardNumber = (number) => {
    return number.replace(/\d(?=\d{4})/g, '*');
  };

  return (
    <Container>
      <h1>Payment Information</h1>
      <h2>Add a New Card</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="expMonth">
              <Form.Label>Exp Month</Form.Label>
              <Form.Control
                type="number"
                placeholder="MM"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="expYear">
              <Form.Label>Exp Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="YY"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <br></br>
          <Col md={6}>
          <h2>Billing Details</h2>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col lg={2}>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <br></br>
            <div style={{display: 'inline-block'}}>
        <Button variant="primary" type="submit" size="sm"> Save </Button>
            </div>
      </Form>
      <h3 className="mt-4">Saved Cards</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Exp Month</th>
            <th>Exp Year</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cardInfo.map((card, index) => (
            <tr key={index}>
              <td>{maskCardNumber(card.cardNumber)}</td>
              <td>{card.expMonth}</td>
              <td>{card.expYear}</td>
              <td>{card.firstName}</td>
              <td>{card.lastName}</td>
              <td>{card.address}</td>
              <td>{card.city}</td>
              <td>{card.state}</td>
              <td>{card.zipCode}</td>
              <td>
                <Button variant="danger" onClick={() => deleteCard(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentInformation;

