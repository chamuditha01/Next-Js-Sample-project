import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>hello</h1>
      <li><Link href="/">home</Link></li>
      <Link href="/Services">aboutus</Link><br></br>
      <Link href="/Products/meat">products</Link>
      </>
  );
}
