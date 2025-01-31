import React from "react";

const TypingZone = () => {
  return (
    <div className="relative flex">
      <textarea className="absolute z-10 bg-transparent" />
      <textarea placeholder="qwe absolute" className="absolute bg-green-50" />
    </div>
  );
};

export default TypingZone;
