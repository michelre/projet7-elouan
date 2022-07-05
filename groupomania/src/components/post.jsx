import '../styles/style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import image from '../assets/icon-left-font.png';

function Post ({author, title, image}) {
  return (
    <article className='home-page__content__post'>
      <div className='home-page__content__post__top'>
        <div className='home-page__content__post__top__profil-picture'>
          <img src={image} alt=''/>
          <p>{author}</p>
        </div>
        <div className='home-page__content__post__top__content'>
          <div className='home-page__content__post__top__content__text'>
            <p>{title}</p>
          </div>
          <div className='home-page__content__post__top__content__img'>
            <img src={image} alt=''/>
          </div>
        </div>
      </div>
      <div className='home-page__content__post__bottom'>
        <span className='home-page__content__post__bottom__like'><FontAwesomeIcon icon={faHeart} /></span>
        <span className='home-page__content__post__bottom__comment'><FontAwesomeIcon icon={faMessage} /></span>
        <span className='home-page__content__post__bottom__modify'><FontAwesomeIcon icon={faEllipsis} /></span>
      </div>
    </article>
  )
}

export default Post;
