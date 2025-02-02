import React, {useRef, useState } from "react";
import { wrongText } from "../utils/wrongText";
import { useTypingInfo } from "../modules";
import { calculateWPM } from "../utils/calculateWPM";

const LIGHT_TEXT_SECTION = "absolute text-left text-[24px] font-mono";

type Props = {
  content: string;
};

const TypingZone = ({ content }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const typingInfo = useTypingInfo();
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // 입력값 변경 핸들러
  const changeHandler = (text: string) => {
      if (!startTime) setStartTime(performance.now()); // 첫 입력 시 시작 시간 설정
      typingInfo.setWpm(calculateWPM(value, startTime!));
      setWrong(wrongText(content, text));
      setValue(text);
    }


  return (
    <div className="relative xl:w-[970px]">
      <textarea
        autoFocus
        ref={textAreaRef}
        onChange={(e) => changeHandler(e.target.value)}
        className="absolute z-1 bg-transparent outline-0 w-0 h-0"
      />
      <div className={[LIGHT_TEXT_SECTION, "z-10 whitespace-pre-wrap"].join(" ")}>
        {value}
      </div>
      <div
        className={[LIGHT_TEXT_SECTION, "text-gray-500"].join(" ")}
        onClick={() => textAreaRef.current?.focus()}
      >
        {content}
      </div>
    </div>
  );
};

export default TypingZone;
