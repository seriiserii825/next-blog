import React from "react";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import DUMMY_DATA from "../../data/dummy-data";

function AllPosts() {
  return (
    <div className="container">
      <h2>All posts</h2>
      <div className="container">
        <PostsGrid posts={DUMMY_DATA} />
      </div>
    </div>
  );
}

export default AllPosts;
