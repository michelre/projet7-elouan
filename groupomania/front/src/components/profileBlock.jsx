import '../styles/style.css';
import React, {useState} from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAltSlash, } from '@fortawesome/free-solid-svg-icons'

function ProfileBlock ({imgProfile, username, handleSubmit}) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');

  return (
    <section className='profile-page'>
      <Header />
        <div className='profile-page__content'>
          <div className='profile-page__content__top'>
            <form onSubmit={(e) => handleSubmit(e, {name, image})}>
              <img src={imgProfile} alt=''></img>
              <input
              name='image'
              id='file-input'
              type='file'
              multiple={false}
              className='profile-page__content__top__upload-image'
              onChange={(e) => 
                setImage(e.target.files[0]
              )}
              ></input>
              <input 
              className='profile-page__content__top__username-input' 
              type='text' name='username' 
              placeholder={username}
              onChange={(e) => 
                setName(e.target.value
              )}>
              </input>
              <button className='profile-page__content__top__button'>Save</button>
            </form>
          </div>
          <div className='profile-page__content__bottom'>
            <div className='profile-page__content__bottom__element'>
              <FontAwesomeIcon className='profile-page__content__bottom__element__icon' icon={faUserAltSlash} />
              <p>Supprimer le compte</p>
            </div>
          </div>
        </div>
      <Menu />
    </section>
  )
}

export default ProfileBlock;