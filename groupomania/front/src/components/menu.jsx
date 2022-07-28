import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Menu () {
  const navigate = useNavigate();
  return (
    <div className='menu'>
      <span onClick={ () => {
        navigate('/');
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faHouse} /><p>Accueil</p></span>
      <span onClick={() => {
        navigate('/profile');
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faUser} /><p>Profil</p></span>
      <span onClick={ () => {
        navigate('/settings');
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faGear} /><p>Paramètres</p></span>
    </div>
  )
}

export default Menu;