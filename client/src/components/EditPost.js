import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setFormData({
        title: response.data.title,
        content: response.data.content,
        author: response.data.author
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch post');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      setError('All fields are required');
      setSaving(false);
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, formData);
      setSuccess('Post updated successfully!');
      
      // Redirect to post detail page after 2 seconds
      setTimeout(() => {
        navigate(`/post/${id}`);
      }, 2000);
    } catch (err) {
      setError('Failed to update post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  return (
    <div className="form-container">
      <h2>Edit Blog Post</h2>
      
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog post content here..."
            required
          />
        </div>

        <div className="form-group">
          <button 
            type="submit" 
            className="btn btn-success"
            disabled={saving}
          >
            {saving ? 'Updating...' : 'Update Post'}
          </button>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => navigate(`/post/${id}`)}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
