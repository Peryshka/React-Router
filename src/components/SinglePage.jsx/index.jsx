import React from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const SinglePage = () => {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', {replace:true});
  useEffect(() =>  {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id]);
  return(
    <>
      <button onClick={goBack}>Go Back</button>
      {/*Bad approach*/}
      <button onClick={goHome}>Go to Home Page</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </>
  )
};

export default SinglePage;