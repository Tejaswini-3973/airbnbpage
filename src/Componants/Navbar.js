// import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Location from './Location';
// import CheckInOut from './CheckInOut';
// import GuestsModal from './GuestsModal';

// const Navbar = ({handlePayload, payload}) => {

//   const [locValue, setLocValue] = useState('');
//   const [showGuests, setShowGuests] = useState(false);
//   const [localPayload, setLocalPayload] = useState(payload);
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');

//   const handleChange = (childData) => {
//     setLocalPayload({...localPayload, location: childData})
//     handlePayload(localPayload)
//   };

//   const handleCheckIn = () => {
//     setCheckIn(true);
//     // setCheckOut(true);
//   }

//   const hadleGuests = () => {
//     setShowGuests(true);
//   }

//   const handleClose = () => {
//     console.log("test")
//     setShowGuests(!showGuests);
//   }

//   const handleGuestData = (val, type) => {
//     switch(type){
//       case 'adult': 
//         setLocalPayload({...localPayload, guests: {...localPayload.guests, adult: val}})
//         handlePayload(localPayload)
//       break;
//       case 'children': 
//         setLocalPayload({...localPayload, guests: {...localPayload.guests, children: val}})
//         handlePayload(localPayload)
//       break;
//       case 'infants': 
//         setLocalPayload({...localPayload, guests: {...localPayload.guests, infants: val}})
//         handlePayload(localPayload)
//       break;
//       case 'pets': 
//         setLocalPayload({...localPayload, guests: {...localPayload.guests, pets: val}})
//         handlePayload(localPayload)
//       break;
//       default:
//         handlePayload({...localPayload});
//     }
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <span className="navbar-brand" href="#">airbnb</span>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <div>
//               <span>Location</span><br></br>
//               <Location handleChange={handleChange } /> 
//             </div>
//           <div>
//           <br></br>
//             <span>Check-In</span><br></br>
//             {/* <span>Check-Out</span> */}
//             <br></br>
//             <CheckInOut handleCheckIn={handleCheckIn}/>
//           </div>
//           <br></br>
          
          
//           <div onClick={hadleGuests}>
            
//             <span >Guests</span><br></br>
//             <br></br>
//             { <GuestsModal show={showGuests} handleClose={handleClose} handleGuestData={handleGuestData} payload={localPayload} /> }
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './Location';
import CheckInOut from './CheckInOut';
import GuestsModal from './GuestsModal';

const Navbar = ({ handlePayload, payload }) => {
  const [locValue, setLocValue] = useState('');
  const [showGuests, setShowGuests] = useState(false);
  const [localPayload, setLocalPayload] = useState(payload);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleChange = (childData) => {
    setLocalPayload({ ...localPayload, location: childData });
    handlePayload(localPayload);
  };

  const handleCheckIn = () => {
    setCheckIn(true);
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand" href="#">airbnb</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Location handleChange={handleChange} />
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={handleCheckIn}>Check-In</span>
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
