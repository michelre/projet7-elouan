import HomeBlock from '../components/homeBlock';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAll } from '../api';


function Home() {
    const [posts, setPosts] = useState([]);
    const [sortedType, setSortedType] = useState('date')

    useEffect (() => {
        getAll()
        .then(response => {
          setPosts(response.data)
        })
    }, )

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