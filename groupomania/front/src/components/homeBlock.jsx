import '../styles/style.css';
import React from 'react';
import Post from './post';
import Menu from './menu';
import NewPostButton from './newPostButton';

function HomeBlock ({posts, sortPosts, sortedType, modify, deletePost, confirmationMessage}) {
  return (
    <section className='home-page'>
      <div className="home-page__scrolling-menu">
        <select value={sortedType} onChange={(e) => sortPosts(e.target.value)}>
          <option value={'date'}>Dernier post</option>
          <option value={'popularity'}>Les plus populaires</option>
        </select>
      </div>
      <div className='home-page__content-menu'>
        <div className="home-page__content">
          {posts.map(post => <Post
              id={post.id}
              authorId={post.userId}
              author={post.user.name}
              authorImage={post.user.image}
              text={post.text}
              image={post.image}
              modify={modify}
              liked={post.liked}
              deletePost={deletePost}
          />)}
        </div>
        <NewPostButton />
        <Menu />
      </div>
    </section>
  )
};

export default HomeBlock;