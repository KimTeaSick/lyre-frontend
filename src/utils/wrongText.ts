export const wrongText = (original:string, input:string) => {
const nowTypingNum = input.length - 1
console.log(input, nowTypingNum, input[nowTypingNum] ,original[nowTypingNum]);

return input[nowTypingNum] !== original[nowTypingNum] ?true : false
}