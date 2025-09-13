import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch post');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        navigate('/');
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
    return <div className="loading">Loading post...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      
      <div className="meta">
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Created:</strong> {formatDate(post.createdAt)}</p>
        {post.updatedAt !== post.createdAt && (
          <p><strong>Updated:</strong> {formatDate(post.updatedAt)}</p>
        )}
      </div>

      <div className="content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1rem' }}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="post-actions" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e9ecef' }}>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to={`/edit/${post._id}`} className="btn btn-warning">
          Edit Post
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
