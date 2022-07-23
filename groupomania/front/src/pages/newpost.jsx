import React, {useState} from "react";
import NewPostBlock from "../components/newPostBlock";
import { create } from "../api";



function NewPost() {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const deleteImage = () => {
    setImg(null);
  }

  const HandleSubmit = (e) => { 
    e.preventDefault();
    create()
    .then(response => {
      response.json().then (data => {
        console.log(data);
        window.location.href = '/';
      })
    })
  }

  return (
    <React.StrictMode>
      <NewPostBlock 
      onImageChange={onImageChange}
      deleteImage={deleteImage}
      img={img}
      HandleSubmit={HandleSubmit}
      />
    </React.StrictMode>
  );
}

export default NewPost;