import styles from "../styles/Home.module.css";
import Intro from "../components/Intro/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  );
}
