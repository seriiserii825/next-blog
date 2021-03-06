import React from "react";
import Image from "next/image";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <section className={styles.hero}>
        <div className={styles.image}>
          <Image
            src="/images/site/max.jpg"
            alt="An image showing Max"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, I am Max</h1>
        <p>
          I blog about web development - especially frontend frameworks like
          Angular or React.
        </p>
      </section>
    </div>
  );
}

export default Intro;
