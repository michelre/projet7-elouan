import '../styles/style.css';
import React from 'react';
import Menu from './menu';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUserAltSlash, } from '@fortawesome/free-solid-svg-icons'
import ConfirmationMessage from './confirmationMessage';

function Settings ({ handleSubmit, confirmationMessage, deleteUserAction}) {
  return (
    <section className='settings-page'>
      <Header />
      <ConfirmationMessage deleteUserAction={deleteUserAction} />
      <div className='settings-page__list'>
        <div onClick={handleSubmit} className='settings-page__list__element'>
          <FontAwesomeIcon className='settings-page__list__element__icon' icon={faArrowRightFromBracket} />
          <p>Se Déconnecter</p>
        </div>
        <div onClick={confirmationMessage} className='settings-page__list__element'>
          <FontAwesomeIcon className='settings-page__list__element__icon' icon={faUserAltSlash} />
          <p>Supprimer le compte</p>
        </div>
      </div>
      <Menu />
    </section>
  )
}

export default Settings;