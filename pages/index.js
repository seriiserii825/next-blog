import styles from "../styles/Home.module.css";
import Intro from "../components/Intro/Intro";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import { getPosts } from "../data/dummy-data";

export default function Home() {
  const posts = getPosts();
  return (
    <div className={styles.container}>
      <Intro />
      <FeaturedPosts posts={posts} />
    </div>
  );
}
