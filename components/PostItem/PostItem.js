import React from "react";
import Link from "next/link";
import classes from "./PostItem.module.css";
import Image from "next/image";
import formatDate from "./../../helpers/formatDate";

function PostItem(props) {
  const {
    post: { title, slug, excerpt, image, date }
  } = props;
  const formattedDate = formatDate(date);
  const imagePath = `/images/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
