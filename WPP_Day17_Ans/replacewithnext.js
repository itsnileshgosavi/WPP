//javaScript program to replace each character in a given string with the next in the English alphabet.
//Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.
function replaceWithNext(str) {

  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
      newStr += 'a' 
    } else {
      newStr += String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
  return newStr
  
}
const str = 'Nilesh'
console.log(replaceWithNext(str))