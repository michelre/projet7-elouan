import HomeBlock from '../components/homeBlock';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAll, deletePost } from '../api';


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

    const modify = (id) => {
      
    }

    const sortPosts = (sortedType) => {
        setSortedType(sortedType)
        if(sortedType === 'date'){
            const newPosts = posts.sort((a, b) => a.id - b.id)
            setPosts([].concat(newPosts))
        }

        if(sortedType === 'popularity'){
          getAll()
          .then(response => {
            response.json().then (data => {
              for (let i = 0; i < data.length; i++) {
                if (data[i].liked === null) {
                  data[i].liked = 0;
                }
                
              }
              function compare (a, b) {
                if (a.liked < b.liked) {
                  return 1;
                }
                if (a.liked > b.liked) {
                  return -1;
                }
                return 0;
              }
              const temp = data.sort(compare)
              setPosts(temp);
              /*const newPosts = posts.sort((a, b) => b. - a.likes)
              setPosts([].concat(newPosts))*/
            });
          })
            
        }
    }

    const deletePostAction = (id) => {
      deletePost(id)
      .then(() => {
        return getAll()
      })
      .then(response => {
        response.json().then (data => {
          setPosts(data);
          return data;
        });
      })
    }

  return (
    <React.StrictMode>
      <HomeBlock
          modify={modify}
          posts={posts}
          sortedType={sortedType}
          sortPosts={sortPosts}
          deletePost={deletePostAction}
      />
    </React.StrictMode>
  );
}

export default Home