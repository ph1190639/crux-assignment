import React, { useState } from 'react';
import './Resume.css';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileScreen from './ProfileScreen';
import { Avatar } from '@mui/material'
//import { Table, Button, Avatar } from '@mui/material';


const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    relevanceScore: 70,
    resumeLink: '/resumes/john_doe_resume.pdf',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    relevanceScore: 80,
    resumeLink: '/resumes/jane_smith_resume.pdf',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    relevanceScore: 90,
    resumeLink: '/resumes/bob_johnson_resume.pdf',
  },
];



function Resume() {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openProfile = (profile) => {
    setSelectedProfile(profile);
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
    setIsProfileOpen(false);
  };


  return (
    <div className='resume'>
      <div className='resume__info'>
        <h1>4 Resumes filtered </h1>
        <p>Purpose Selection</p>
      </div>
      <div className='resume__profileTop'>
        <div className='resume__profileLeft'>
        <h2>Recommended Profiles</h2>
        <p>Resumes fit for the job role</p>
        </div>
        
          <div className='resume__profileRight'>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Relevance Score</th>
              <th>Resume Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="name__email" onClick={() => openProfile(row)}>
                <Avatar>
                    {row.name.charAt(0)}{row.name.split(' ')[1] ? row.name.split(' ')[1].charAt(0) : ''}
                  
                  </Avatar >
                  <div>{row.name} {row.email}</div>
                  
                </td>
                
                <td>{row.relevanceScore}</td>
                <td>
                  <a href={row.resumeLink} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
                <td>
                  <Link to={`/details/${row.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
        </div>
      </div>


      <div className='resume__profileBottom'>
        <div className='resume__profileLeft'>
        <h2>Non-Recommended Profiles</h2>
        <p>Resumes that don't fit for the job role</p>
        </div>
        
          <div className='resume__profileRight'>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Relevance Score</th>
              <th>Resume Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="name__email">
                <Avatar>
                    {row.name.charAt(0)}{row.name.split(' ')[1] ? row.name.split(' ')[1].charAt(0) : ''}
                  
                  </Avatar >
                  <div>{row.name} {row.email}</div>
                  
                </td>
                
                <td>{row.relevanceScore}</td>
                <td>
                  <a href={row.resumeLink} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
                <td>
                  <Link to={`/details/${row.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
        </div>
      </div>


      <ProfileScreen isOpen={isProfileOpen} onClose={closeProfile} profileDetails={selectedProfile} />
      </div>
  );
}

export default Resume;
