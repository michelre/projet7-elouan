import React, {useState} from 'react';
import ProfileBlock from '../components/profileBlock';
import { getUser } from '../api';

function SinglePost() {
  const user = localStorage.getItem('user');
  const [imgProfile, setImgProfile] = useState();
  const [username, setUsername] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgProfile(URL.createObjectURL(file));
  }

  getUser(user)
    .then(response => {
      response.json().then(data => {
        setUsername(data.name);
        setImgProfile(data.image);
      });
    })
    .catch(error => {
      console.log(error);
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <React.StrictMode>
      <ProfileBlock
      onImageChange={onImageChange}
      imgProfile={imgProfile}
      username={username}
      />
    </React.StrictMode>
  );
}

export default SinglePost;