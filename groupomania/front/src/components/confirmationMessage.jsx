import '../styles/style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function ConfirmationMessage ({ handleSubmit, deletePost }) {
  const navigate = useNavigate();
  const pageName = window.location.pathname.split('/')[1];

  if (pageName === 'settings') {
    return (
  <div className='confirmation__box'>
    <div className='confirmation__box-message'>
      <p>Vous allez être déconnecté</p>
      <p>Etes-vous sûr de vouloir continuer ?</p>
      <div>
        <button onClick={handleSubmit}>Oui</button>
        <button onClick={() => navigate('/')}>Non</button>
      </div>
    </div>
  </div>  
  )
  }
}

export default ConfirmationMessage;