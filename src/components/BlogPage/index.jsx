import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useSearchParams, useLocation} from 'react-router-dom';

//useLocation object of location
//private routes are needed to use wrap some component and to make it private f.e for authorization
function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post')  || '';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({post: query});
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  console.log(useLocation());

  return(
    <>
      <h1>Blog Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
         <input type="search" name="search" />
         <input type="submit" value="Search" />
      </form>
      <Link to='/posts/new'>Add new post</Link>
      {
        posts
          .filter(post => post.title.includes(postQuery))
          .map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
        ))
      }
    </>
  )
};

export default BlogPage;