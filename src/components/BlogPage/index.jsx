import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../BlogFilter/index';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div>
      <h1>Our news</h1>
      <Link to="/posts/new">Add new post</Link>

      <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

      <Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>
      {
        posts.map(post => (
          posts.filter(
            post => post.title.includes(postQuery) && post.id >= startsFrom
          ).map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))
        ))};
      }
    </div>
  )
}
export default BlogPage;