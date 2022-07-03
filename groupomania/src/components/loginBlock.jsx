import '../styles/style.css';
import logo from '../assets/icon-left-font.png';
import React from 'react';
import { Link } from 'react-router-dom'

function loginBlock() {
  return (
  <section className='login-register'>
    <div className="login-register__block">
      <div className="login-register__block__title">
        <img src={logo} alt='Logo de groupomania' />
      </div>
      <div className="login-register__block__content">
        <h2>Se connecter</h2>
        <form className='login-register__block__content__form'>
          <label>E-mail</label>
          <input type="email" name="email" placeholder="E-mail" />
          <p>{/*Error message when email is wrong*/}</p>
          <label>Mot de passe</label>
          <input type="password" name="password" placeholder="Mot de passe" />
          <p>{/*Error message when password is wrong*/}</p>
          <button type="submit">Se connecter</button>
        </form>
        <p className='connection-link'>Vous n'avez pas de compte ? <Link className='connection-link__Link' to="/register">Inscrivez-vous</Link></p>
      </div>
    </div>
  </section>
  )
};

export default loginBlock