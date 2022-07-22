import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import LikeButton from './like';
//import { getAll } from '../api';

function Post ({author, text, image}) {

  return (
    <article className='home-page__content__post'>
      <div className='home-page__content__post__top'>
        <div className='home-page__content__post__top__profil'>
          <div className='home-page__content__post__top__profil__picture'>
            <img src={image} alt=''/>
          </div>
          <p>{author}</p>
        </div>
        <div className='home-page__content__post__top__content'>
          <div className='home-page__content__post__top__content__text'>
            <p>{text}</p>
          </div>
          <div className='home-page__content__post__top__content__img'>
          </div>
        </div>
      </div>
      <div className='home-page__content__post__bottom'>
        <LikeButton />
        <span className='home-page__content__post__bottom__icon'><FontAwesomeIcon className='home-page__content__post__bottom__icon__font' icon={faMessage} /></span>
        <span id='post-settings' className='home-page__content__post__bottom__icon'><FontAwesomeIcon className='home-page__content__post__bottom__icon__font' icon={faEllipsis} />
        <div id='post-settings__menu'>
          <p onClick={() => {
            window.location.href = '/newpost';
          }}>Modifier</p>
          <p>Supprimer</p>
        </div>
        </span>
      </div>
    </article>
  )
}

export default Post;