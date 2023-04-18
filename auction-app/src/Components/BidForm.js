import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './BidForm.css';

const BidForm = ({ currentBid, setCurrentBid }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('');

  const auctionEndTime = new Date('June 30, 2023 18:00:00 PDT');

  const getTimeRemaining = (endTime) => {
    const now = new Date();
    const timeDifference = endTime - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(auctionEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the current bid value in the parent component (Item.js)
    setCurrentBid(parseFloat(bidAmount).toFixed(2));
    setBidAmount('');
  };

  const minBidValue = parseFloat(currentBid) + 1;

  return (
    <>
      <div className="bid-form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="bidAmount">
            <Form.Control
              type="number"
              min={minBidValue}
              step="1"
              value={bidAmount}
              onChange={handleChange}
              placeholder={`Min Bid: $${minBidValue}`}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="bid-btn">
            Bid
          </Button>
        </Form>
        <div className="time-remaining">
          <p>Auction ends in:</p>
          <p>{timeRemaining}</p>
        </div>
      </div>
    </>
  );
};

export default BidForm;
