import '../styles/style.css';
import LoginBlock from '../components/loginBlock';
import React from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        //redirect to /
        navigate('/home');
    }
  return (
    <React.StrictMode>
      <LoginBlock
        handleSubmit={handleSubmit}
      />
    </React.StrictMode>
  );
}

export default Login
