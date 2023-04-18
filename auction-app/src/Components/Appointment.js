import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointment.css';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTimeSlots(true);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSchedulePickup = () => {
    if (selectedTime) {
      alert(`Appointment Scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    } else {
      alert('Please select a time slot');
    }
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    const startTime = new Date(2023, 6, selectedDate.getDate(), 9);
    const endTime = new Date(2023, 6, selectedDate.getDate(), 17);

    for (let time = startTime; time < endTime; time.setMinutes(time.getMinutes() + 30)) {
      const formattedTime = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`;
      timeSlots.push(
        <Button
          key={formattedTime}
          onClick={() => handleTimeSelection(formattedTime)}
          variant={selectedTime === formattedTime ? 'primary' : 'outline-primary'}
          style={{ margin: '5px' }}
        >
          {formattedTime}
        </Button>,
      );
    }

    return timeSlots;
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2 style={{ color: 'black', fontWeight: 'bold' }}>Select a Date:</h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date(2023, 6, 1)}
            maxDate={new Date(2023, 6, 31)}
            dateFormat="MMMM d, yyyy"
            filterDate={(date) => {
              const day = date.getDay();
              return day !== 0 && day !== 6;
            }}
            inline
          />
        </Col>
      </Row>
      {showTimeSlots && (
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h2 style={{ marginTop: '20px', color: 'black', fontWeight: 'bold' }}>Select a Time:</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {generateTimeSlots()}
            </div>
          </Col>
        </Row>
      )}
      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col xs={12} md={6} className="text-center">
          <Button onClick={handleSchedulePickup} variant="primary">
            Schedule Pick Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;
