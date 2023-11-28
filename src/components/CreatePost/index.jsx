import React from 'react';
import {UseAuth} from '../hook/UseAuth';
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  const {signout} = UseAuth();
  const navigate = useNavigate();
  return(
    <>
      <h1> Create a post </h1>
      <button onClick={() => signout(() => navigate('/', {replace:true}))}>Log out</button>
    </>
  )
};

export default CreatePost;