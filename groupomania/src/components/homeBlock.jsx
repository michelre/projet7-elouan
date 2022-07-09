import '../styles/style.css';
//import logo from '../assets/icon-left-font.png';
import React from 'react';
//import { Link } from 'react-router-dom'
import Post from './post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBell, faGear  } from '@fortawesome/free-solid-svg-icons'

function HomeBlock ({posts, sortPosts, sortedType}) {
  return (
    <section className='home-page'>
      <div className="home-page__scrolling-menu">
        <select value={sortedType} onChange={(e) => sortPosts(e.target.value)}>
          <option value={'date'}>Dernier post</option>
          <option value={'popularity'}>Les plus populaires</option>
        </select>
      </div>
      <div className="home-page__content">
          {posts.map(p => <Post
              key={p.id}
              author={p.author}
              title={p.title}
              image={p.image}
          />)}
      </div>
      <div className='home-page__menu'>
        <span className='home-page__menu__icon'><FontAwesomeIcon className='home-page__menu__icon__font' icon={faHouse} /></span>
        <span className='home-page__menu__icon'><FontAwesomeIcon className='home-page__menu__icon__font' icon={faBell} /></span>
        <span className='home-page__menu__icon'><FontAwesomeIcon className='home-page__menu__icon__font' icon={faGear} /></span>
      </div>
    </section>
  )
};

export default HomeBlock;