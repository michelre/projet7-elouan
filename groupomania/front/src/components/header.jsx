import '../styles/style.css';
import React from "react";

function Header () {
  const pageName = window.location.pathname.split('/')[1];
  if (pageName === 'settings') {
    return (
      <div className='header'>
        <h1>Settings</h1>
      </div>
    )
  } else if (pageName === 'newpost') {
    return (
      <div className='header'>
        <h1>New Post</h1>
      </div>
    )
  } else if (pageName === 'profile') {
    return (
      <div className='header'>
        <h1>Profile</h1>
      </div>
    )
  } else {
    return (
      <div className='header'>
        <h1>Groupomania</h1>
      </div>
    )
  }
}

export default Header;