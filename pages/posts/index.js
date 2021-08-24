import React from "react";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import { getPosts } from "../../data/dummy-data";

function AllPosts() {
  const posts = getPosts();
  return (
    <div className="container">
      <h2>All posts</h2>
      <div className="container">
        <PostsGrid posts={posts} />
      </div>
    </div>
  );
}

export default AllPosts;
