import React, {useState} from "react";
import NewPostBlock from "../components/newPostBlock";
import { create, modifyPost, getOne } from "../api";



function NewPost() {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const deleteImage = () => {
    setImg(null);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    getOne(id)
      .then(response => {
        response.json().then(data => {
          document.querySelector('textarea[name="text"]').value = data.post.text;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  const HandleSubmit = (e) => { 
    e.preventDefault();
    if (id) {
      modifyPost(id)
        .then(response => {
          response.json().then(data => {
            console.log(data);
          });
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      create()
      .then(response => {
        response.json().then (data => {
          console.log(data);
          window.location.href = '/';
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
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