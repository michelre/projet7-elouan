import RegisterBlock from '../components/registerBlock';
import React from 'react';
import {signup} from '../api';
import { useNavigate } from 'react-router-dom'

function RegisterFetch () {
  const navigate = useNavigate();
  signup()
    .then(response => {
      if (response.status === 201) {
        navigate('/login');
      }
    })
}

function Register() {
  const handleSubmit = event => {
    RegisterFetch()
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