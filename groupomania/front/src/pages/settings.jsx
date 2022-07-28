import React, { useState } from 'react';
import SettingsBlock from '../components/settingsBlock';
import { logout } from '../api';
import { useNavigate } from 'react-router-dom'

function Settings () {
  const [isConfirmation, setIsConfirmation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = event => {
    logout()
    .then(response => {
      if (response.status === 200) {
        navigate('/login');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      } else {
        console.log('error');
      }
    })
  }

  const confirmationMessage = () => {
    if (!isConfirmation) {
      document.querySelector('.confirmation__box').style.display = 'flex';
  } else {
      document.querySelector('.confirmation__box').style.display = 'none';
  }
  }

  const deleteUser = () => {

  }

  return (
    <React.StrictMode>
      <SettingsBlock
      handleSubmit={handleSubmit} 
      confirmationMessage={confirmationMessage}
      />
    </React.StrictMode>
  )
}

export default Settings;