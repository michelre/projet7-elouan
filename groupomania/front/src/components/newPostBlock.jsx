import '../styles/style.css';
import React, {useState} from 'react';
import Menu from './menu';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage  } from '@fortawesome/free-solid-svg-icons'
import {useEffect} from 'react'


function NewPostBlock ({onImageChange, img, deleteImage, HandleSubmit, imgForm, textForm}) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
      if(textForm){
          setText(textForm)
      }
      if(imgForm){
          setImage(imgForm)
      }
  }, [imgForm, textForm])

  return (
    <section className='newpost-page'>
      <Header />
      <div className='newpost-page__content'>
        <form onSubmit={(e) => HandleSubmit(e, {text, image})} className='newpost-page__content__form'>
          <textarea
          onChange={(e) => setText(e.target.value)}
          name='text'
          id='add-text'
          className='newpost-page__content__form__add-text'
          type='text'
          value={text}
          />
          <label htmlFor='add-text'></label>
          <input
          name='image'
          id='file-input'
          type='file'
          multiple={false}
          onChange={(e) =>
            setImage(e.target.files[0]
          )}
          className='newpost-page__content__form__upload-image'
          ></input>
          <label htmlFor="file-input" className='newpost-page__content__form__upload-image__label'><FontAwesomeIcon className='newpost-page__content__form__upload-image__label__icon' icon={faImage} /></label>
          {img && (
            <div className='newpost-page__content__form__image-container'>
              <img className='newpost-page__content__form__upload-image__img' src={image} alt='' />
              <button className='newpost-page__content__form__upload-image__delete' onClick={deleteImage}>Supprimer</button>
            </div>
          )}
          <button  className='newpost-page__content__form__button' type='submit'>Publier</button>
        </form>
      </div>
      <Menu />
    </section>
  )
}

export default NewPostBlock;
