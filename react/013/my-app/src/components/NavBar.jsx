import styles from "./navBar.module.css";

function Docs() {
  return (
    <div>
      <h1>문서</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolores
        impedit dolore quisquam perspiciatis non labore quaerat id itaque,
        numquam optio, minus neque illo sit cumque atque. Illum, ipsa harum.
      </p>
    </div>
  );
}

function Book() {
  return (
    <div>
      <h1>자습서</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolores
        impedit dolore quisquam perspiciatis non labore quaerat id itaque,
        numquam optio, minus neque illo sit cumque atque. Illum, ipsa harum.
      </p>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h1>블로그</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolores
        impedit dolore quisquam perspiciatis non labore quaerat id itaque,
        numquam optio, minus neque illo sit cumque atque. Illum, ipsa harum.
      </p>
    </div>
  );
}

function Community() {
  return (
    <div>
      <h1>커뮤니티</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolores
        impedit dolore quisquam perspiciatis non labore quaerat id itaque,
        numquam optio, minus neque illo sit cumque atque. Illum, ipsa harum.
      </p>
    </div>
  );
}

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
