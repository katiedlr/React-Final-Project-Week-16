import React from 'react';
import Item from './Item';
import { Container } from 'react-bootstrap';

const ItemList = ({ savedItems, setSavedItems }) => {
  const items = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/81tIGYNRxHL._SL1500_.jpg',
      title: 'gb Pockit Air All Terrain Ultra Compact Lightweight Travel Stroller with Breathable Fabric in Velvet Black',
      retailPrice: '199.99',
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71fqr3NMdIL._AC_SL1500_.jpg',
      title: 'Bose SoundLink Revolve (Series II) Portable Bluetooth Speaker – Wireless Water-Resistant Speaker with 360° Sound, Black',
      retailPrice: '219.99',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/91ubktnbNVL._AC_SL1500_.jpg',
      title: 'SAMSUNG 23.5” CF396 Curved Computer Monitor, AMD FreeSync for Advanced Gaming, 4ms Response Time, Wide Viewing Angle, Ultra Slim Design, LC24F396FHNXZA, Black',
      retailPrice: '139.99',
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/91x-MH5S+RL._SL1500_.jpg',
      title: 'DaVinci Gabby Pillowback Swivel Glider in Polyester, Misty Grey, Greenguard Gold & CertiPUR-US Certified',
      retailPrice: '299.99',
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/71vtXgJBagL._SL1500_.jpg',
      title: 'Ring Video Doorbell - 1080p HD video, improved motion detection, easy installation – Satin Nickel',
      retailPrice: '69.99',
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/71H2qs5g6LL._SL1500_.jpg',
      title: 'CELSIUS Official Variety Pack, Functional Essential Energy Drink, 12 Fl Oz (Pack of 12)',
      retailPrice: '21.49',
    },
    {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/91RaDysK8zL._AC_SX679_.jpg',
      title: 'LEGO Classic Medium Creative Brick Box 10696 Building Toy Set - Featuring Storage, Includes Train, Car, and a Tiger Figure, and Playset for Kids, Boys, and Girls Ages 4-99',
      retailPrice: '34.99',
    },
    {
      id: 8,
      image: 'https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX522_.jpg',
      title: 'Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (6th Generation)',
      retailPrice: '1029.00',
    },
    {
      id: 9,
      image: 'https://m.media-amazon.com/images/I/51BcwAyqVZL._AC_SX466_.jpg',
      title: 'Bose Noise Cancelling Headphones 700,Bluetooth, Over-Ear Wireless with Built-In Microphone for Clear Calls & Alexa Voice Control,Black',
      retailPrice: '379.99',
    },
  ];

  const handleSaveItem = (item) => {
    if (!savedItems.some((savedItem) => savedItem.id === item.id)) {
      setSavedItems([...savedItems, item]);
      alert('Item saved successfully!');
    } else {
      alert('Item is already saved.');
    }
  };

  return (
    <div>
      <div className="text-center">
      <h1 style={{color: 'black', fontWeight: 'bold'}}>Check out our items!</h1>
      <br></br>
      </div>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {items.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              title={item.title}
              retailPrice={item.retailPrice}
              onSave={() => handleSaveItem(item)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ItemList;
