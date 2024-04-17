import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { v4 as uuidv4 } from 'uuid'; // import uuidv4

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [myEventsList, setMyEventsList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDates, setPopupDates] = useState({ start: null, end: null });
  const [eventTitle, setEventTitle] = useState(""); // State for event title input
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event for update/delete

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null); // Reset selected event
  };

  const handleSelectSlot = ({ start, end }) => {
    // Adjust the end time to include the selected end day
    const adjustedEnd = end ? moment(end).toDate() : moment(start).add(1, 'hour').toDate();
    
    setShowPopup(true);
    setPopupDates({ start, end: adjustedEnd });
  };
  
  

  const handleAddEvent = () => {
    const { start, end } = popupDates;
  
    console.log(start,end)
    const newEvent = {
      id: uuidv4(),
      title: eventTitle,
      start,
      end: end || moment(start).add(1, 'hour').toDate(), // Use the provided end date if available, else add 1 hour
    };
  
    // Update events list
    setMyEventsList([...myEventsList, newEvent]);
  
    // Close the popup and reset event title input
    setShowPopup(false);
    setEventTitle("");
  };

  const handleSelectEvent = (event) => {
    setShowPopup(true);
    setSelectedEvent(event); // Set the selected event for update/delete
    setEventTitle(event.title); // Set the event title in the input field for update
  };

  const handleUpdateEvent = () => {
    const updatedEvents = myEventsList.map(event =>
      event.id === selectedEvent.id ? { ...event, title: eventTitle } : event
    );
    setMyEventsList(updatedEvents);
    setShowPopup(false);
    setEventTitle(""); // Reset event title input
  };

  const handleDeleteEvent = () => {
    const updatedEvents = myEventsList.filter(event => event.id !== selectedEvent.id);
    setMyEventsList(updatedEvents);
    setShowPopup(false);
    setEventTitle(""); // Reset event title input
  };

  return (
    <div className="h-screen">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent} // Add onSelectEvent to handle event selection
        selectable
      />
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-50 backdrop-blur-md">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl mb-4">{selectedEvent ? 'Update Event' : 'Add Event'}</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              {selectedEvent ? (
                <>
                  <button onClick={handleUpdateEvent} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Update Event</button>
                  <button onClick={handleDeleteEvent} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete Event</button>
                </>
              ) : (
                <button onClick={handleAddEvent} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Add Event</button>
              )}
              <button onClick={handleClosePopup} className="px-4 py-2 bg-gray-400 text-white rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
