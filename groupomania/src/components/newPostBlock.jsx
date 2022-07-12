import '../styles/style.css';
import React from 'react';
import Menu from './menu';
import Header from './header';


function NewPostBlock ({onImageChange, img, deleteImage}) {
  return (
    <section className='newpost-page'>
      <Header />
      <div className='newpost-page__content'>
        <form className='newpost-page__content__form'>
          <textarea id='add-text' className='newpost-page__content__form__add-text' type='text' placeholder='Ajouter du texte' />
          <label for='add-text'></label>
          <input
          id='file-input'
          type='file'
          multiple={false}
          onChange={onImageChange}
          className='newpost-page__content__form__upload-image'
          ></input>
          <label for="file-input" className='newpost-page__content__form__upload-image__label'>Ajouter une image</label>
          {img && (
            <div className='newpost-page__content__form__image-container'>
              <img className='newpost-page__content__form__upload-image__img' src={img} alt='' />
              <button className='newpost-page__content__form__upload-image__delete' onClick={deleteImage}>Supprimer</button>
            </div>
          )}
          <button className='newpost-page__content__form__button' type='submit'>Publier</button>
        </form>
      </div>
      <Menu />
    </section>
  )
}

export default NewPostBlock;