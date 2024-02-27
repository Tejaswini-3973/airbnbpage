import React from 'react';

const Location = () => {
  return (
    
    <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLocation" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownLocation">
                    <li><a className="dropdown-item" href="#">Pune</a></li>
                    <li><a className="dropdown-item" href="#">Mumbai</a></li>
                    <li><a className="dropdown-item" href="#">Kolhapur</a></li>
                    <li><a className="dropdown-item" href="#">Nagpur</a></li>
                  </ul>
                </li>
  );
}

export default Location;
