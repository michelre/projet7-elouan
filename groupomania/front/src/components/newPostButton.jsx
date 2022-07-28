import '../styles/style.css';
import React from "react";
import { useNavigate } from 'react-router-dom'

function NewPostButton () {
  const navigate = useNavigate();
  return (
      <button 
      className='new-post-button'
      onClick={ () => {
        navigate('/newpost');
      }}>
        <p className='new-post-button__mobile'>+</p>
        <p className='new-post-button__desktop'>Nouveau post</p>
        </button>
  )
}

export default NewPostButton;