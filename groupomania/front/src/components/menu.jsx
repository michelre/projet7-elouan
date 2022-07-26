import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Menu () {

  return (
    <div className='menu'>
      <span onClick={ () => {
        window.location.href = '/';
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faHouse} /><p>Accueil</p></span>
      <Link className='menu__icon' to={'/profile'}><span className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faUser} /><p>Profil</p></span></Link>
      <span onClick={ () => {
        window.location.href = '/settings';
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faGear} /><p>Paramètres</p></span>
    </div>
  )
}

export default Menu;