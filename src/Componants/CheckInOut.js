// import React from 'react';

// const CheckInOut = () => {
//   return (
//     <div>
//        <li className="nav-item dropdown">
//        <ul className="dropdown-menu" aria-labelledby="navbarDropdownCheckInOut">
//       <input className="dropdown-item" type="datetime-local" />
//       <input className="dropdown-item" type="datetime-local" />
//       </ul>
//       </li>
//     </div>
//   );
// }

// export default CheckInOut;
import React from 'react';


const CheckIn = () => {

  const handleCheckIn = (e) => {
    handleCheckIn(e);
  }

  //  const checkOut = ({handleClick}) => {
  //   const handleClick = (e) => {
  //     handleClick( e);
  //  }
  return (
    <li className="nav-item dropdown active" onChange={e => handleCheckIn(e.target.value)}>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownCheckIn">
        <li><input className="dropdown-item" type="datetime-local" /></li>
      </ul>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdownCheckOut">
              <li><input className="dropdown-item" type="datetime-local" /></li>
            </ul> 
    </li>
  );
}

export default CheckIn;
