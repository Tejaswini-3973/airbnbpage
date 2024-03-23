
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // import the CSS file
import Location from './Location';
import GuestsModal from './GuestsModal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = ({ handlePayload, setPayload, payload }) => {
  const [showGuests, setShowGuests] = useState(false);
  const [localPayload, setLocalPayload] = useState(payload);

  const handleLocChange = (childData) => {
    setLocalPayload({ ...localPayload, location: childData });
    handlePayload({...localPayload, location: childData});
    
  };

  const handleGuests = () => {
    setShowGuests(true);
  };

  const handleClose = () => {
    setShowGuests(!showGuests);
  };

  const handleGuestData = (val, type) => {
    switch (type) {
      case 'adult':
        setLocalPayload({ ...localPayload, guests: { ...localPayload.guests, adult: val } });
        handlePayload(localPayload);
        break;
      case 'children':
        setLocalPayload({ ...localPayload, guests: { ...localPayload.guests, children: val } });
        handlePayload(localPayload);
        break;
      case 'infants':
        setLocalPayload({ ...localPayload, guests: { ...localPayload.guests, infants: val } });
        handlePayload(localPayload);
        break;
      case 'pets':
        setLocalPayload({ ...localPayload, guests: { ...localPayload.guests, pets: val } });
        handlePayload(localPayload);
        break;
      default:
        handlePayload({ ...localPayload });
    }
  };

  const onStartDateChange = (val) => {
    setStartDate(val);
    setLocalPayload({ ...localPayload, checkIn: val});
    handlePayload(localPayload);
  }
 
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand" href="#">airbnb</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Location handleChange={handleLocChange} />
            </li>
            <li className="nav-item">
              <span >Check in
                <DatePicker selected={startDate} onChange={(date) => onStartDateChange(date)} />
              </span>
            </li>
            <li className="nav-item">
              <span>Check Out
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={handleGuests}>Guests</span>
            </li>
           
            
          </ul>
        </div>
      </div>
      {showGuests && <GuestsModal show={showGuests} handleClose={handleClose} handleGuestData={handleGuestData} payload={localPayload} />}
    </nav>
  );
};

export default Navbar;

