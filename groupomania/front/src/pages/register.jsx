import RegisterBlock from '../components/registerBlock';
import React from 'react';

function registerFetch () {
  fetch('http://localhost:4000/api/auth/signup', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: document.querySelector('input[name="username"]').value,
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value,
      passwordConfirmation: document.querySelector('input[name="passwordConfirmation"]').value
    })
  })
    .then(response => {
      if (response.status === 200 || response.status === 500) {
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