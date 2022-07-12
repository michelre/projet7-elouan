import RegisterBlock from '../components/registerBlock';
import React from 'react';
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    //redirect to /
    navigate('/login');
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