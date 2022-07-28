import LoginBlock from '../components/loginBlock';
import React from 'react';
import {login} from '../api';
//import { useNavigate } from 'react-router-dom'


async function LoginFetch () {
  await login()
    .then((response) => { 
      if (response.status === 200) {
        response.json().then (token => {
          const userId = token.userId;
          const Token = (token.token);
          localStorage.setItem('user', userId);
          localStorage.setItem('token', Token);
          window.location.href= '/';
        });
      }
    })
    .catch((error) => { console.log(error)})
}

function Login() {
  const handleSubmit = event => {
    event.preventDefault();
    LoginFetch()
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