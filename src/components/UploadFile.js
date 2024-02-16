import React, { useState } from 'react'
import './UploadFile.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import UploadFileIcon from '@mui/icons-material/UploadFile';

import Popup from './Popup';

function UploadFile() {

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [role, setRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleAttachClick = () => {
    // Handle logic for attaching files
    setPopupOpen(true);
  };

  const handleSubmit = () => {
    // Add your logic for handling the form submission
    console.log('Role:', role);
    console.log('Job Description:', jobDescription);

    // You can add further logic here, like making an API call, updating state, etc.
    setRole('');
    setJobDescription('');
    // Close the popup after submission
    setPopupOpen(false);
  };
  const handleCancelClick = () => {
    
    setPopupOpen(false);
 };

 const handleFileInputChange = (event) => {
  event.preventDefault();
  const selectedFiles = Array.from(event.target.files);
  const updatedFiles = selectedFiles.map((file) => ({
    name: file.name,
    size: `${(file.size / 1024).toFixed(2)} KB`, // Convert bytes to kilobytes
    selected: false,
  }));
  setUploadedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
};


  const handleCheckboxChange = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[index].selected = !updatedFiles[index].selected;
    setUploadedFiles(updatedFiles);
  };


  return (
    <div className='uploadFile'>
      
      <div className='uploadFile__details'>
        <UploadFileIcon />
        <label htmlFor="fileInput" className="fileInputLabel" >
          <span>Click to upload PDF</span>
        </label>
        <input type="file" id="fileInput" accept=".pdf" style={{ display: 'none' }} onChange={handleFileInputChange} multiple/>
        
      </div>
      <div className="uploadedFilesContainer">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="uploadedFile">
            
            <div className="fileInfo">
              
              <PictureAsPdfIcon />
              <div className='fileInfo__details'>
                <h4>{file.name}</h4>
                <p>Size: {file.size}</p>
              </div>
            </div>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={file.selected}
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="cancelButton" onClick={handleCancelClick}>Cancel</button>
        <button className="attachButton" onClick={handleAttachClick}>Attach files</button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        
        <h2>Add Role</h2>
        <h3>Add the job description</h3>
        <label htmlFor="role">Role*:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <label htmlFor="jobDescription">Job Description*:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <div className='popup__button'>
          <button className='popup__cancel' onClick={handleCancelClick}>Cancel</button>
          <button className='popup__submit' onClick={handleSubmit}>Submit</button>
          </div>
      </Popup>
  
    </div>
  )
}

export default UploadFile;