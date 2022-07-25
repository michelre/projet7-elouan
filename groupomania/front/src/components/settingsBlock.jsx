import '../styles/style.css';
import React from 'react';
import Menu from './menu';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUserAltSlash,  } from '@fortawesome/free-solid-svg-icons'

function Settings ({ handleSubmit }) {
  return (
    <section className='settings-page'>
      <Header />
      <div onClick={handleSubmit} className='settings-page__list'>
        <div className='settings-page__list__element'>
          <FontAwesomeIcon className='settings-page__list__element__icon' icon={faArrowRightFromBracket} />
          <p>Se Déconnecter</p>
        </div>
        <div className='settings-page__list__element'>
          <FontAwesomeIcon className='settings-page__list__element__icon' icon={faUserAltSlash} />
          <p>Supprimer le compte</p>
        </div>
      </div>
      <Menu />
    </section>
  )
}

export default Settings;