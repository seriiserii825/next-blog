import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "../PostHeader/PostHeader";
import classes from "./PostContent.module.css";

function PostContent({ title, image, content }) {
  const imagePath = `/images/posts/${image}`;
  return (
    <div className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default PostContent;
