import React from 'react';

const  Location = ({handleChange }) => {

  const handleLocChange = (e) => {
    handleChange( e);
  }

  return (
    <div>
      <select id="location" onChange={e => handleLocChange(e.target.value)} >
          <option value="-1">Location</option>
          <option selected="selected" value="Pune">Pune</option>
          <option value="Kolhapur">Kolhapur</option>
      </select>
    </div>
  );
}

export default Location;
