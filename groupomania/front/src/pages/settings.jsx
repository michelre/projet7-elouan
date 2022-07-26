import React from 'react';
import SettingsBlock from '../components/settingsBlock';
import { logout } from '../api';

function Settings () {

  const handleSubmit = event => {
    logout()
    .then(response => {
      if (response.status === 200) {
        // mettre le redirect de react
        window.location.href = '/login';
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      } else {
        console.log('error');
      }
    })
  }

  return (
    <React.StrictMode>
      <SettingsBlock handleSubmit={handleSubmit} />
    </React.StrictMode>
  )
}

export default Settings;