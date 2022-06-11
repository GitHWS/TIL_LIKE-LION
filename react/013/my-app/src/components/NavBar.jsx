import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item} id="docs">
            문서
          </li>
          <li className={styles.item} id="book">
            자습서
          </li>
          <li className={styles.item} id="blog">
            블로그
          </li>
          <li className={styles.item} id="community">
            커뮤니티
          </li>
        </ul>
      </nav>
    </>
  );
}
