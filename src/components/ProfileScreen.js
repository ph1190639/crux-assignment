import React from 'react';
import { Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import './ProfileScreen.css';

const ProfileScreen = ({ isOpen, onClose, profileDetails }) => {

  //console.log("Rendering ProfileScreen. Is open?", isOpen);
  if (!isOpen || !profileDetails) {
    return null;
  }

  return (
    <div className="profileScreen__popup">
      <div className='profileScreen__avatar'>
        <Avatar />
      </div>
      <div className='close-Icon' onClick={onClose}><CloseIcon /></div>
      <div className='profileScreen__info'>
        <h3>{profileDetails.name}</h3>
        <p>{profileDetails.email}</p>
        <div className='profileScreen__button'>
          <button>College</button>
          <button>Project</button>
          <button>Professional Experience</button>
        </div>
      </div>

      <div className="profileScreen-inner">
        <p>Name: {profileDetails.name}</p>
        <p>Branch: Engineering Physics</p>
        <p>Degree: B.Tech</p>
        <p>CGPA: 8.5</p>
        <p>Start: 18/07/2019</p>
        <p>End: 15/05/2023</p>
        
      </div>
    </div>
  );
};

export default ProfileScreen;