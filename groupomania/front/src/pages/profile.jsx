import React, {useState} from 'react';
import ProfileBlock from '../components/profileBlock';

function SinglePost() {
  const [imgProfile, setImgProfile] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgProfile(URL.createObjectURL(file));
  }

  return (
    <React.StrictMode>
      <ProfileBlock
      onImageChange={onImageChange}
      imgProfile={imgProfile}
      />
    </React.StrictMode>
  );
}

export default SinglePost;