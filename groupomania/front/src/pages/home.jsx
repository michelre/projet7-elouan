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
          response.json().then (data => {
            setPosts(data);
            return data;
          });
        })
    }, [])

    /*posts.forEach(post => {
      if (+localStorage.getItem('userId') === post.userId && document.getElementById('post-settings')) {
        console.log(+localStorage.getItem('userId'), post.userId);
        document.getElementById('post-settings').style.display = 'flex';
      } else {
        //document.getElementById('post-settings').style={display: 'none'};
      }
    })*/

    const modify = (id) => {
        window.location.href = `/newpost?id=${id}`;
    }

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
          modify={modify}
          posts={posts}
          sortedType={sortedType}
          sortPosts={sortPosts}
      />
    </React.StrictMode>
  );
}

export default Home





/*for (let i = 0; i < data.length; i++) {
        let temp = +localStorage.getItem('userId');
        if (data[i].userId === temp) {
          const setings = document.getElementById('#post-settings__menu');
          setings.style={display: 'flex'};
        }
      } */