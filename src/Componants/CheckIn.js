import React from 'react';

const CheckInOut = () => {
  return (
    <div>
       <li className="nav-item dropdown">
       <ul className="dropdown-menu" aria-labelledby="navbarDropdownCheckInOut">
        <input className="dropdown-item" type="datetime-local" />
        <input className="dropdown-item" type="datetime-local" />
      </ul>
      </li>
    </div>
  );
}

export default CheckInOut;
