
function reversestring(str){
  let newstr = "";
  for(let i=str.length-1;i>=0;i--){
    newstr += str[i];
  }
  return newstr;
}
const newstr ="Nilesh";
console.log(reversestring(newstr))