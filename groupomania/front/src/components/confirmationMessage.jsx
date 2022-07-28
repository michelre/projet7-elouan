import '../styles/style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function ConfirmationMessage ({ handleSubmit, deleteUserAction }) {
  const navigate = useNavigate();
  const pageName = window.location.pathname.split('/')[1];

  if (pageName === 'settings') {
    return (
  <div className='confirmation__box'>
    <div className='confirmation__box-message'>
      <p>Vous allez supprimé votre compte</p>
      <p>Etes-vous sûr de vouloir continuer ?</p>
      <div>
        <button onClick={deleteUserAction}>Oui</button>
        <button onClick={() => navigate('/')}>Non</button>
      </div>
    </div>
  </div>  
  )
  }
}

export default ConfirmationMessage;