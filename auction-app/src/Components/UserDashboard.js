import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const UserDashboard = ({ savedItems }) => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Dashboard</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <ul style={{ listStyle: 'none', textAlign: 'center' }}>
              <li style={{ fontWeight: 'bold' }}>
                <Link
                  to={{ pathname: '/UserDashboard/Saves', state: { savedItems: savedItems } }}
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  Saves
                </Link>
              </li>
              <li style={{ fontWeight: 'bold' }}>
                <Link
                  to="/my-bids"
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  My Bids
                </Link>
              </li>
              <li style={{ fontWeight: 'bold' }}>
                <Link
                  to="/payment-info"
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  Payment Information
                </Link>
              </li>
              <li style={{ fontWeight: 'bold' }}>
                <Link
                  to="/invoices"
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  Invoices
                </Link>
              </li>
              <li style={{ fontWeight: 'bold' }}>
                <Link
                  to="/UserDashboard/appointment"
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                >
                  Appointments
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
