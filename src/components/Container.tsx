import React from "react";
import Info from "./Info";
import TypingZone from "./TypingZone";
import { getTest } from "../service/main";

const Container = () => {
  const [content, setContent] = React.useState<any>()

  const setCon = async() => {
    const result = await getTest()
    setContent(result)
  }

  React.useEffect(()=>{
    setCon()
  },[])

  return (
    <div className="flex flex-col justify-start items-center h-[100vh]">
      <Info title={content?.title} />
      <TypingZone content={content?.contents} />
    </div>
  );
};

export default Container;
