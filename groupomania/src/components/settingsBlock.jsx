import '../styles/style.css';
import React from 'react';
import Menu from './menu';
import Header from './header';

function Settings () {
  return (
    <section className='settings-page'>
      <Header />
      <Menu />
    </section>
  )
}

export default Settings;