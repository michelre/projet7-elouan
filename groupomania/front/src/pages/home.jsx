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
          getAll()
          .then(response => {
            response.json().then (data => {
              function compareDate (a, b) {
                if (a.createdAt < b.createdAt) {
                  return 1;
                }
                if (a.createdAt > b.createdAt) {
                  return -1;
                }
                return 0;
              }
              data.sort(compareDate);
              setPosts(data);
            });
          })
        }

        if(sortedType === 'popularity'){
          getAll()
          .then(response => {
            response.json().then (data => {
              function compareLikes (a, b) {
                if (a.likes < b.likes) {
                  return 1;
                }
                if (a.likes > b.likes) {
                  return -1;
                }
                return 0;
              }
              data.sort(compareLikes)
              setPosts(data);
            });
          })
          .catch(error => {
            console.log(error);
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