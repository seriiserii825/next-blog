import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
