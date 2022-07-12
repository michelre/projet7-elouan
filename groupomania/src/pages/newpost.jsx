import React, {useState} from "react";
import NewPostBlock from "../components/newPostBlock";



function NewPost() {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const deleteImage = () => {
    setImg(null);
  }

  return (
    <React.StrictMode>
      <NewPostBlock 
      onImageChange={onImageChange}
      deleteImage={deleteImage}
      img={img}
      />
    </React.StrictMode>
  );
}

export default NewPost;