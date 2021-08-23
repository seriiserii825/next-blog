import styles from "../styles/Home.module.css";
import Intro from "../components/Intro/Intro";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import DUMMY_DATA from "../data/dummy-data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <FeaturedPosts posts={DUMMY_DATA} />
    </div>
  );
}
