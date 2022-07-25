import RegisterBlock from '../components/registerBlock';
import React from 'react';
import {signup} from '../api';

function registerFetch () {
  signup()
    .then(response => {
      if (response.status === 201) {
        window.location.href = '/login';
      }
    })
}

function Register() {
  const handleSubmit = event => {
    registerFetch()
    event.preventDefault();
  }
  return (
    <React.StrictMode>
      <RegisterBlock
        handleSubmit={handleSubmit}
      />
    </React.StrictMode>
  );
}

export default Register