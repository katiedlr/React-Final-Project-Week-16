import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const ItemDetails = () => {
  const [index, setIndex] = useState(0);
  const title = 'gb Pockit Air All Terrain Ultra Compact Lightweight Travel Stroller with Breathable Fabric in Velvet Black';
  const description = 'The revolutionary ultra compact folding mechanism of the Pocket Air All Terrain reduces the stroller into a handbag shaped package in seconds and is airplane hand luggage compliant. Take to the skies with confidence. The ultra compact folding mechanism of the Pocket Air All Terrain is airplane hand luggage compliant, freeing you to travel with your stroller without hassle. Weighing only 4.6 kg, the Pocket Air All-Terrain is the perfect travel companion. Its super lightweight frame is easy to maneuver , lift and carry. Perfect for the city, on vacation, or just being on the go. The backrest of the Pocket Air All Terrain is designed with a breathable mesh fabric that provides comfort for your child even on hot days. Available as an accessory, a snug padded inlay can be added to the seat unit for additional warmth on cooler days. The double wheels of the Pocket Air All Terrain increase both comfort and usability, allowing parents to confidently maneuver on different surfaces and ensuring you will never get stuck in between cobblestones.';
  const condition = 'New';

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/81OFNyt054L._SL1500_.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/81cqS7n5qvL._SL1500_.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/71izv5GeokL._SL1500_.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Condition: {condition}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
