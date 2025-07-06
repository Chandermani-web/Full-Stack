import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setposts] = useState([]);

  const getposts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/posts");
      if (!res.ok) {
        console.log("Network issue");
      }
      const data = await res.json();
      console.log(data);
      setposts(data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <main className="post-container">
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2><strong>Title: </strong>{post.title}</h2>
              <p className="desc">{post.body}</p>
              <p className="userid">User ID: {post.userId}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Post;
