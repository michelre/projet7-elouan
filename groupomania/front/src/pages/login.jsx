import LoginBlock from '../components/loginBlock';
import React from 'react';
import {login} from '../api';


async function loginFetch () {
  await login()
    .then((response) => { 
      if (response.status === 200) {
        response.text().then (token => {
          const Token = (JSON.parse(token));
          localStorage.setItem('token', Token.token);
          window.location.href = '/';
        });
      }
    })
    .catch((error) => { console.log(error)})
}

function Login() {
  const handleSubmit = event => {
    event.preventDefault();
    loginFetch()
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