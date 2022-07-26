import React from 'react';
import '../styles/style.css';
import Header from '../components/header';
import Menu from '../components/menu';
import Post from '../components/post';

function SinglePost() {
  return (
    <React.StrictMode>
      <Header />
      
      <Menu />
    </React.StrictMode>
  );
}

export default SinglePost;