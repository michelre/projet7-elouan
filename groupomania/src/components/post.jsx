import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Image from '../assets/black.jpeg';
import LikeButton from './like';

function Post ({author, title, image}) {
  return (
    <article className='home-page__content__post'>
      <div className='home-page__content__post__top'>
        <div className='home-page__content__post__top__profil'>
          <div className='home-page__content__post__top__profil__picture'>
            <img src={Image} alt=''/>
          </div>
          <p>{author}</p>
        </div>
        <div className='home-page__content__post__top__content'>
          <div className='home-page__content__post__top__content__text'>
            <p>{title}</p>
          </div>
          <div className='home-page__content__post__top__content__img'>
          </div>
        </div>
      </div>
      <div className='home-page__content__post__bottom'>
        <LikeButton />
        <span className='home-page__content__post__bottom__icon'><FontAwesomeIcon className='home-page__content__post__bottom__icon__font' icon={faMessage} /></span>
        <span className='home-page__content__post__bottom__icon'><FontAwesomeIcon className='home-page__content__post__bottom__icon__font' icon={faEllipsis} /></span>
      </div>
    </article>
  )
}

export default Post;