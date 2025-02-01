export const calculateWPM = (typedText:string, startTime:number) => {
    const totalChars = typedText.length;
    const words = totalChars / 5;
    console.log(performance.now(), startTime, performance.now() - startTime);
    const timeElapsed = (performance.now() - startTime) / 1000 / 60; // ms → min
    return timeElapsed > 0 ? Math.round(words / timeElapsed) : 0;
  };

