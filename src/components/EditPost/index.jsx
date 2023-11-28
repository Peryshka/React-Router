import React from 'react';
import {useParams} from 'react-router-dom';

const EditPost = () => {
  const {id} = useParams();
  return(
    <>
      <h1>Edit Post {id}</h1>
    </>
  )
};

export default EditPost;