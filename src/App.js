
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componants/Navbar';
import './App.css';

function App() {
  
  const payload1 = {
      location: "",
      checkIn: "",
      checkOut: "",
      guests : {
        adult: 0,
        children: 0,
        infants: 0,
        pets: false
      }
    };

  const [payload, setPayload] = useState(payload1);

  const handlePayload = (data) => {
    setPayload(data);
  }

  return (
    <div className="App background-image-dd-1">
      <header>
        <Navbar handlePayload={handlePayload} setPayload={setPayload} payload={payload}/>
      </header>

      <div className="container mt-5">
        <h1 className="text-light" style={{ fontSize: "70px", fontWeight: "bold" }}>Go<br></br>Near </h1>
        <p className="font-monospace text-black" style={{ fontSize: "15px", fontWeight: "bold" }}>
          <span style={{ backgroundColor: "white" }}> Explore nearby stays</span>
        </p>
      </div>
    </div>
  );
}

export default App;
