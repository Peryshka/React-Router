import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

//useLocation object of location
//private routes are needed to use wrap some component and to make it private f.e for authorization
function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  console.log(useLocation());
  return(
    <>
      <h1>Blog Page</h1>
      <Link to='/posts/new'>Add new post</Link>
      {
        posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
        ))
      }
    </>
  )
};

export default BlogPage;