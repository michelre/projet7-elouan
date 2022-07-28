import RegisterBlock from '../components/registerBlock';
import React from 'react';
import {signup} from '../api';

function registerFetch () {
  
  signup()
    .then(response => {
      response.json().then (data => {
        console.log(data);
        if (response.status === 201) {
          window.location.href = '/login';
        } else if (response.status === 400) {
          document.querySelector('#email-error').innerText = data.error;
        } else if (response.status === 409) {
          document.querySelector('#email-error').innerText = data.error;
        } else if (response.status) {
          document.querySelector('#password-error').innerText = data.error;
        } else if (response.status === 412) {
          document.querySelector('#password-error').innerText = data.error;
        }
      })
    })
    .catch(error => {
      console.log(error);
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