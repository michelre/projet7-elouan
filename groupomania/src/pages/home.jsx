import '../styles/style.css';
import HomeBlock from '../components/homeBlock';
import React, { useState } from 'react';
//import imagetest1 from '../assets/tatouate.jpg';
//import imagetest2 from '../assets/ponpon.png';

function Home() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'vneibvpzeiubvezipubvdzepubvpieuzbvedzpbvediuvbe', image:'', author: 'User 1', likes: 10},
        {id: 2, title: 'Test 2', image:'', author: 'User 2', likes: 15},
        {id: 3, title: 'Test 3', image:'', author: 'User 2', likes: 5},
        {id: 4, title: 'Test 4', image:'', author: 'User 3', likes: 20},
        {id: 5, title: 'Test 5', image:'', author: 'User 4', likes: 30},
        {id: 6, title: 'Test 6', image:'', author: 'User 5', likes: 40},
        {id: 7, title: 'Test 7', image:'', author: 'User 6', likes: 50},
        
    ]);
    const [sortedType, setSortedType] = useState('date')

    const sortPosts = (sortedType) => {
        setSortedType(sortedType)
        if(sortedType === 'date'){
            const newPosts = posts.sort((a, b) => a.id - b.id)
            setPosts([].concat(newPosts))
        }
        if(sortedType === 'popularity'){
            const newPosts = posts.sort((a, b) => b.likes - a.likes)
            setPosts([].concat(newPosts))
        }
    }

  return (
    <React.StrictMode>
      <HomeBlock
          posts={posts}
          sortedType={sortedType}
          sortPosts={sortPosts}
      />
    </React.StrictMode>
  );
}

export default Home