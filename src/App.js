
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Componants/Navbar';
import CheckInOut from './Componants/CheckInOut';
import Location from './Componants/Location';
import GuestsModal from './Componants/GuestsModal';
import PlacesToStay from './Componants/PlacesToStay';

function App() {
  const [showGuestsModal, setShowGuestsModal] = useState(false);

  const handleGuestsClick = () => {
    setShowGuestsModal(true);
  };

  const handleCloseGuestsModal = () => {
    setShowGuestsModal(false);
  };
  
  return (
    <div className="App">
      <header>
        <Navbar/>
        <GuestsModal/>
        <CheckInOut/>
      </header>

      <GuestsModal show={showGuestsModal} handleClose={handleCloseGuestsModal} />

      <div className="container mt-5">
        <h1 className="text-light" style={{ fontSize: "70px", fontWeight: "bold" }}>Go<br></br>Near </h1>
         {/* <p className="text-light font-monospace" style={{ fontSize: "25px", fontWeight: "bold", backgroundColor: "darkblue", color: "transparent" }}>Explore nearby stays</p>  */}
        <p className="font-monospace text-black" style={{ fontSize: "15px", fontWeight: "bold" }}>
          <span style={{ backgroundColor: "white" }}> Explore nearby stays</span>
        </p>
      </div>

     
     
    </div>
  );
}

export default App;
