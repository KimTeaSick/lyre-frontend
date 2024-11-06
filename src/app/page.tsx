"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";
import LOGO_DARK from "../assets/img/intro/logo_dark.svg";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 800);
  }, []);

  return (
    <div className={styles.page}>
      <Image src={LOGO_DARK} alt="" className={styles.logo} />
    </div>
  );
}
