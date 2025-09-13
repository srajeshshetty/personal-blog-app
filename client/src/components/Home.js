import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter(post => post._id !== id));
      } catch (err) {
        setError('Failed to delete post');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div>
      <div className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>Share your thoughts, ideas, and stories with the world. Create, edit, and manage your blog posts with ease.</p>
        <Link to="/create" className="create-post-btn">
          Create New Post
        </Link>
      </div>

      {error && <div className="error">{error}</div>}

      {posts.length === 0 ? (
        <div className="loading">
          <h3>No posts yet!</h3>
          <p>Create your first blog post to get started.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <div className="author">By {post.author}</div>
              <div className="date">{formatDate(post.createdAt)}</div>
              <div className="content">{post.content}</div>
              <div className="post-actions">
                <Link to={`/post/${post._id}`} className="btn btn-primary">
                  Read More
                </Link>
                <Link to={`/edit/${post._id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(post._id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
