import '../styles/style.css';
import logo from '../assets/icon-left-font.png';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function RegisterBlock() {
  const navigate = useNavigate();

  const HandleSubmit = event => {
    event.preventDefault();

    //redirect to /
    navigate('/');
  }
  return (
  <section className='login-register'>
    <div className="login-register__block">
      <div className="login-register__block__title">
        <img src={logo} alt='Logo de groupomania' />
      </div>
      <div className="login-register__block__content">
        <h2>S'inscrire</h2>
        <form onSubmit={HandleSubmit} className='login-register__block__content__form'>
          <label>E-mail</label>
          <input type="email" name="email" placeholder="E-mail" />
          <p>{/*Error message when email is wrong*/}</p>
          <label>Mot de passe</label>
          <input type="password" name="password" placeholder="Mot de passe" />
          <p>{/*Error message when password is wrong*/}</p>
          <label>Confirmation du mot de passe</label>
          <input type="password" name="passwordConfirmation" placeholder="Confirmation" />
          <p>{/*Error message when password confirmation is wrong*/}</p>
          <button type="submit">S'inscrire</button>
        </form>
        <p className='connection-link'>Déjà un compte ? <Link className='connection-link__Link' to="/">Connectez-vous</Link></p>
      </div>
    </div>
  </section>
  )
};

export default RegisterBlock
