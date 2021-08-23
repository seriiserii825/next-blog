import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POST = {
  title: "Next js",
  slug: "next-js",
  content: "## Next js excerpt",
  image: "getting-started-nextjs.jpg",
  date: "2021-04-08"
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.image}`;
  return (
    <div className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <div>{DUMMY_POST.content}</div>
    </div>
  );
}

export default PostContent;
