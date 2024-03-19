import React from 'react';

const GuestsModal = ({ show, handleClose, handleGuestData, payload }) => {

  const handleAdultData = (val) => {
    handleGuestData(val, 'adult'); 
  }

  const handleChildrenData = (val) => {
    handleGuestData(val, 'children'); 
  }

 

  return (

    <div className={`modal show ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Guests</h5>
           
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          
          <div className="modal-body">
            <p>Adults: <input type="number" value={payload.guests.adult} defaultValue="0" onChange={e => handleAdultData(e.target.value)} /></p>
            <p>Children: <input type="number" value={payload.guests.children} defaultValue="0" onChange={e => handleChildrenData(e.target.value)} /></p>
            <p>Infants: <input type="number" defaultValue="0" /></p>
            <p>Pets: <input type="number" defaultValue="0" /></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" submit={handleClose}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default GuestsModal;
