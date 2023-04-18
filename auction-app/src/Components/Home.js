import React, { useState } from 'react';
import ItemList from './ItemList';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [savedItems, setSavedItems] = useState([]);

  return (
    <div className="d-flex justify-content-center">
      <Container>
        <div className="text-center">
            <br></br>
          <h1 style={{fontSize: '4rem', fontWeight: 'bold', color: 'black', textShadow: '2px 2px #ccc'}}>Welcome to Enzade Auction</h1>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textShadow: '1px 1px #ccc'}}>Login or Register to start bidding!</p>
          <br></br>
          <br></br>
        </div>
        <ItemList savedItems={savedItems} setSavedItems={setSavedItems} />
      </Container>
    </div>
  );
};

export default Home;
