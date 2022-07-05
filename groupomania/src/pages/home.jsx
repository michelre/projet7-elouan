import '../styles/style.css';
import HomeBlock from '../components/homeBlock';
import React, {useEffect, useState} from 'react';

function Home() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Test 1', image: '', author: 'User 1', likes: 10},
        {id: 2, title: 'Test 2', image: '', author: 'User 2', likes: 15},
        {id: 3, title: 'Test 3', image: '', author: 'User 2', likes: 5},
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
