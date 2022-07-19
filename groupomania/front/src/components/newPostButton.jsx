import '../styles/style.css';
import React from "react";

function NewPostButton () {
  return (
      <button 
      className='new-post-button'
      onClick={ () => {
        window.location.href = '/newpost';
      }}>
        <p className='new-post-button__mobile'>+</p>
        <p className='new-post-button__desktop'>Nouveau post</p>
        </button>
  )
}

export default NewPostButton;