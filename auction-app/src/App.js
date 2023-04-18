import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Contact from './Components/Contact';
import UserDashboard from './Components/UserDashboard';
import ItemDetails from './Components/ItemDetails';
import Appointment from './Components/Appointment';
import Saves from './Components/Saves';
import PaymentInformation from './Components/PaymentInformation'; // Import PaymentInformation component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import './Components/NavBar.css';

function App() {
  const [savedItems, setSavedItems] = useState([]);

  return (
    <Router>
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand>Enzade Auction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/UserDashboard">
                <Nav.Link>User Dashboard</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home savedItems={savedItems} setSavedItems={setSavedItems} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UserDashboard" element={<UserDashboard savedItems={savedItems} />} />
        <Route path="/UserDashboard/appointment" element={<Appointment />} />
        <Route path="/ItemDetails" element={<ItemDetails />} />
        <Route path="/UserDashboard/Saves" element={<Saves savedItems={savedItems} />} />
        <Route path="/payment-info" element={<PaymentInformation />} /> {/* Add the new route for PaymentInformation */}
      </Routes>
    </Router>
  );
}

export default App;
