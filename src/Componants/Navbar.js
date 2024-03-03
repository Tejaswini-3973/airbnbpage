import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './Location';
import CheckInOut from './CheckInOut';
import GuestsModal from './GuestsModal';

const Navbar = ({handlePayload, payload}) => {

  const [locValue, setLocValue] = useState('');
  const [showGuests, setShowGuests] = useState(false);
  const [localPayload, setLocalPayload] = useState(payload);

  const handleChange = (childData) => {
    setLocalPayload({...localPayload, location: childData})
    handlePayload(localPayload)
  };

  const hadleGuests = () => {
    setShowGuests(true);
  }

  const handleClose = () => {
    console.log("test")
    setShowGuests(!showGuests);
  }

  const handleGuestData = (val, type) => {
    switch(type){
      case 'adult': 
        setLocalPayload({...localPayload, guests: {...localPayload.guests, adult: val}})
        handlePayload(localPayload)
      break;
      case 'children': 
        setLocalPayload({...localPayload, guests: {...localPayload.guests, children: val}})
        handlePayload(localPayload)
      break;
      default:
        handlePayload({...localPayload});
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand" href="#">airbnb</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
              <span>Location</span>
              <Location handleChange={handleChange } /> 
            </div>
          <div>
            <span>Dates</span>
            <CheckInOut />
          </div>
          <div onClick={hadleGuests}>
            <span >Guests</span>
            { <GuestsModal show={showGuests} handleClose={handleClose} handleGuestData={handleGuestData} payload={localPayload} /> }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;