export const wrongText = (original:string, input:string) => {
const nowTypingNum = input.length - 1
return input[nowTypingNum] !== original[nowTypingNum] ? true : false
}