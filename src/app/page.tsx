"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Calculator from "./components/Calculator";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Hello To Vatsal's Calculator</h1>
        <Calculator></Calculator>   
      </div>
    </div>
  );
}
