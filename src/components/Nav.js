import React, { useState } from 'react'
import './Nav.css'
import { Avatar } from '@mui/material'
import ProfileScreen from './ProfileScreen';

function Nav() {

  
  const [isProfileScreenOpen, setProfileScreenOpen] = useState(false);
  
  const openProfileScreen = () => {
    
    console.log("Opening Profile Screen");
    setProfileScreenOpen(true);
  };
  

  return (
    <div className='nav'>
      <div className='nav__info'>
        <img src='./images/logo.png' alt='' />
      </div>
      <div className='nav__avatar' onClick={() => openProfileScreen()}>
        <Avatar />
      </div>
      <ProfileScreen isOpen={isProfileScreenOpen} onClose={() => setProfileScreenOpen(false)} />
    </div>

    
  )
}

export default Nav;