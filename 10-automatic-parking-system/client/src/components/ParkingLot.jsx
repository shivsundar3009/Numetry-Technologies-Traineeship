import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParkingLotList = () => {
  const [parkingLots, setParkingLots] = useState([]);

  useEffect(() => {
    const fetchParkingLots = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/parkingLots');
        console.log(response);
        console.log(response.data);
        setParkingLots(response.data);
      } catch (error) {
        console.error('Error fetching parking lots:', error);
      }
    };

    fetchParkingLots();
  }, []);

  return (
    <div>
      <h1>Parking Lots</h1>
      <ul>
        {parkingLots.map(parkingLot => (
          <li key={parkingLot._id}>
            <h2>{parkingLot.name}</h2>
            <p>Location: {parkingLot.location}</p>
            <p>Capacity: {parkingLot.capacity}</p>
            <p>Hourly Rate: {parkingLot.hourlyRate}</p>
            <h3>Slots:</h3>
            <ul>
              {parkingLot.slots.map(slot => (
                <li key={slot._id}>
                  Slot Number: {slot.slotNumber} - Status: {slot.status} {slot.bookedBy ? `(Booked by ${slot.bookedBy})` : ''}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingLotList;