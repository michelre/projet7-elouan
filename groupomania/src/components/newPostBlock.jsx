import '../styles/style.css';
import React from 'react';
import Menu from './menu';
import Header from './header';


function NewPostBlock ({onImageChange, img}) {
  return (
    <section className='newpost-page'>
      <Header />
      <div className='newpost-page__content'>
        <form className='newpost-page__content__form'>
          <textarea className='newpost-page__content__form__add-text' type='text' placeholder='Ajouter du texte' />
          <label></label>
          <input
          id='file-input'
          type='file'
          multiple={false}
          onChange={onImageChange}
          className='newpost-page__content__form__upload-image'
          ></input>
          <img src={img} alt="" />
          <label for="file-input" className='newpost-page__content__form__upload-image__label'>Ajouter une image</label>
          <button className='newpost-page__content__form__button' type='submit'>Publier</button>
        </form>
      </div>
      <Menu />
    </section>
  )
}

export default NewPostBlock;