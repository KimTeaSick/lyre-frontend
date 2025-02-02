// export const calculateWPM = (typedText:string, startTime:number) => {
//     const totalChars = typedText.length;
//     const words = totalChars / 5;
//     const timeElapsed = (performance.now() - startTime) / (1000 * 60); // ms → min
//     console.log('WPM', Math.round(words / timeElapsed));
//     return timeElapsed > 0 ? Math.round(words / timeElapsed) : 0;
//   };

  export const calculateWPM = (typedText: string, startTime: number) => {
    const totalKeystrokes = typedText.length; // 공백 포함 입력된 키 개수
    const elapsedTime = (performance.now() - startTime) / (1000 * 60); // ms → 분 변환
    return elapsedTime > 0.01 ? Math.round(totalKeystrokes / elapsedTime) : 0;
};