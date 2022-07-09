import '../styles/style.css';
//import logo from '../assets/icon-left-font.png';
import React from 'react';
//import { Link } from 'react-router-dom'
import Post from './post';
import Menu from './menu';

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
      <Menu />
    </section>
  )
};

export default HomeBlock;