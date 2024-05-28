'use client'
import Link from "next/link";
import styles from './page.module.css'
import { useState } from "react";


export default function Page() {
  const[inputtext,setInputtext]=useState('');

  const handleclickpush = () =>{
    alert("cha")
  }

  const ontype = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setInputtext(e.target.value);
  }
  return (
    <>
      <h1>hello</h1>
      <Link className={styles.link} href="/">home</Link><br></br>
      <Link className={styles.link} href="/Services">aboutus</Link><br></br>
      <Link className={styles.link} href="/Products/meat">products</Link>
      <button onClick={handleclickpush}>push</button>
      <input type="text" onChange={ontype} />
      <p style={{color:'wheat'}}>value is: {inputtext}</p>
{
  inputtext==='cha' ? <div>
        <h1 style={{color:'wheat'}}>members area</h1>
        <p style={{color:'wheat'}}>Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Tempora, numquam eaque! Atque labore
           blanditiis harum voluptatibus est 
           facilis nostrum dolor, modi quas error
            deleniti eius amet dolorem, a quam
             doloribus.</p>
      </div> : null
}

      
      </>
  );
}
