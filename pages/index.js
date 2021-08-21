import styles from "../styles/Home.module.css";
import Intro from "../components/Intro/Intro";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";

const DUMMY_DATA = [
  {
    title: "Next js",
    slug: "next-js",
    excerpt: "Next js excerpt",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  },
  {
    title: "Next js 1",
    slug: "next-js-1",
    excerpt: "Next js excerpt",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  },
  {
    title: "Next js 2",
    slug: "next-js-2",
    excerpt: "Next js excerpt",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <FeaturedPosts posts={DUMMY_DATA} />
    </div>
  );
}
