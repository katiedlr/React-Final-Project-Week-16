// Item.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BidForm from './BidForm';
import './Item.css';

const Item = ({ image, title, retailPrice, handleSave }) => {
  const [currentBid, setCurrentBid] = useState(10);

  return (
    <Card className="item-card" style={{ width: '18rem' }}>
      <Link to="/ItemDetails">
        <Card.Img
          variant="top"
          src={image}
          style={{ height: '400px', objectFit: 'contain', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
      </Link>
      <Card.Body>
        <Card.Title style={{ color: 'black' }}>{title}</Card.Title>
        <Card.Text style={{ color: 'black' }}>Retail Price: ${retailPrice}</Card.Text>
        <Card.Text style={{ color: 'black' }}>Current Bid: ${currentBid}</Card.Text>
        <BidForm currentBid={currentBid} setCurrentBid={setCurrentBid} />
        <div className="d-flex justify-content-center mt-4">
          <Button variant="secondary" onClick={handleSave} style={{ width: '100%', fontSize: '18px' }}>
            Save
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
