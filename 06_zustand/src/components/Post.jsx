import React, { useEffect } from "react";
import { usePostStore } from "../store/postStore";

const Post = () => {
  const { post, loading, error, fetchPost } = usePostStore();
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {post.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Post;
