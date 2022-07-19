/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'

function SettingsList () {
  const [settings] = useState([
    {title: 'Se déconnecter', icon: faArrowRightFromBracket},
    {title: 'Supprimer le compte', icon: faUserAltSlash}
  ]);
  settings.map((setting) => () => {
    return (
      <div className='settings-page__list__element'>
        <FontAwesomeIcon className='settings-page__list__element__icon' icon={settings.icon} />
        <p>{settings.title}</p>
      </div>
    )
  }
)
}

export default SettingsList;*/