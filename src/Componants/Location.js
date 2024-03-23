import React from 'react';

const Location = ({ handleChange }) => {
  const handleLocChange = (e) => {
    handleChange(e.target.value); 
  };

  return (
    <div>
      <select id="location" onChange={handleLocChange}>
        <option selected>Location</option>
        <option value="Pune">Pune</option>
        <option value="Kolhapur">Kolhapur</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Thane">Thane</option>
      </select>
    </div>
  );
};

export default Location;
