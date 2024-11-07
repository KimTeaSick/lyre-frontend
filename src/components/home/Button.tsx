import React from "react";
import Image from "next/image";

import styles from "./Button.module.scss";

type ButtonProps = {
  icon?: string;
  title: string;
  event: () => void;
};

const Button = ({ icon, title, event }: ButtonProps) => {
  return (
    <div className={styles["home--button-main"]} onClick={event}>
      <Image src={icon!} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Button;
