"use client";
import React from "react";

import * as assets from "@/assets/img/home/index";
import styles from "./home.module.scss";
import { MainButton } from "@/components/home";
import FileInput from "@/components/common/FileInput";

const fileUpload = (ref: HTMLInputElement) => {
  ref.onclick;
};
const page = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={styles["page-home"]}>
      <div className={styles["home-top--section"]}>
        <FileInput ref={fileRef} />
        <MainButton
          title="파일 올리기"
          icon={assets.ICON_BOX}
          event={() => fileRef.current?.click()}
        />
      </div>
    </div>
  );
};

export default page;
