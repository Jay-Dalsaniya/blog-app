import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css"; // Import the CSS file

const BlogPost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      alert("Post deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-content">{post.content}</p>
      <div className="blog-post-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="edit-button"
          onClick={() => navigate(`/edit-post/${id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
