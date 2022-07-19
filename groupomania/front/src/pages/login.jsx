import LoginBlock from '../components/loginBlock';
import React from 'react';


function loginFetch () {
  fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value
    })
  })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
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
