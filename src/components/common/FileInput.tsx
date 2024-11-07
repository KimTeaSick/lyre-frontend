import React, { RefObject } from "react";

type FileInputType = {
  ref: RefObject<HTMLInputElement>;
};

const FileInput = ({ ref }: FileInputType) => {
  return <input type="file" ref={ref} style={{ display: "none" }} />;
};

export default FileInput;
