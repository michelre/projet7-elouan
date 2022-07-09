import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBell, faGear  } from '@fortawesome/free-solid-svg-icons'

function Menu () {
  return (
    <div className='menu'>
      <span onClick={ () => {
        window.location.href = '/';
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faHouse} /></span>
      <span className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faBell} /></span>
      <span onClick={ () => {
        window.location.href = '/settings';
      }} className='menu__icon'><FontAwesomeIcon className='menu__icon__font' icon={faGear} /></span>
    </div>
  )
}

export default Menu;