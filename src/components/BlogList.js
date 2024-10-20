import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogList.css"; // Import the CSS file

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Blog Posts</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post._id} className="blog-list-item">
            <Link to={`/posts/${post._id}`} className="blog-list-link">
              <h2 className="blog-list-item-title">{post.title}</h2>
            </Link>
            <p className="blog-list-item-content">
              {post.content.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
