import React from 'react';
import './Popup.css';
import CloseIcon from '@mui/icons-material/Close';

function Popup({ isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
      <span className="close-icon" 
        onClick={onClose}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
}

export default Popup;
