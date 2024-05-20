import Link from "next/link";
import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <h1>hello</h1>
      <Link className={styles.link} href="/">home</Link><br></br>
      <Link className={styles.link} href="/Services">aboutus</Link><br></br>
      <Link className={styles.link} href="/Products/meat">products</Link>
      </>
  );
}
