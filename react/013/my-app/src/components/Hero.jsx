import styles from "./hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>React</h1>
        <p className={styles.heroSubTitle}>
          사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
        </p>
        <div className={styles.linkBox}>
          <a href="null" className={styles.start}>
            시작하기
          </a>
          <a href="null" className={styles.read}>
            자습서 읽어보기 &gt;
          </a>
        </div>
      </section>
    </>
  );
}
