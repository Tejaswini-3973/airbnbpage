import React from 'react';
import GuestsModal from './GuestsModal';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPlaces" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Places to Stay
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownPlaces">
                    <li><a className="dropdown-item" href="#">Hotels</a></li>
                    <li><a className="dropdown-item" href="#">Resorts</a></li>
                    <li><a className="dropdown-item" href="#">Apartments</a></li>
                  </ul>
                </li> 
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLocation" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Location
                  </a>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCheckInOut" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Check In / Check Out
                  </a>
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownGuests" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={GuestsModal}>
                    Guests
                  </a>
                    
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownGuests">
                    <li>Adults: <input className="dropdown-item" type="number" defaultValue="1" /></li>
                    <li>Children: <input className="dropdown-item" type="number" defaultValue="0" /></li>
                    <li>Infants: <input className="dropdown-item" type="number" defaultValue="0" /></li>
                    <li>Pets: <input className="dropdown-item" type="number" defaultValue="0" /></li>
                  </ul>
                </li> 
                    </ul>
                </div>
               {/* <GuestsModal/> */}
            </div>
        </nav>
    );
}

export default Navbar;
