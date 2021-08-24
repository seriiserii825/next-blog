import React from "react";
import PostContent from "../../components/PostDetail/PostContent/PostContent";
import { getPostBySlug } from "../../data/dummy-data";

function PostSlug({ post }) {
  return <PostContent {...post} />;
}

export default PostSlug;

export async function getServerSideProps(context) {
  const slug = context.query.postSlug;
  const post = await getPostBySlug(slug);

  return {
    props: {
      post: post
    }
  };
}
