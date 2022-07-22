import LoginBlock from '../components/loginBlock';
import React from 'react';
import {login} from '../api';


async function loginFetch () {
  login()
    .then((response) => {
      const temp = response.json();
      console.log(temp)
      /*const token = response.json().token
      localStorage.setItem('token', token)*/
      if (response.status === 200) {
        //window.location.href = '/';
      }
    })
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