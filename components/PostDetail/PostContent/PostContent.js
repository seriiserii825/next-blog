import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "../PostHeader/PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";

function PostContent({ title, image, content }) {
  const imagePath = `/images/posts/${image}`;
  const customRenders = {
    image(image) {
      return <Image src={image.src} alt={image.alt} width={200} height={100} />;
    }
  };
  return (
    <div className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renders={customRenders}>{content}</ReactMarkdown>
    </div>
  );
}

export default PostContent;
