
function removeDuplicates(str){
  let newstr = "";
  for(let i=0;i<str.length;i++){
    if(newstr.indexOf(str[i]) == -1){
      newstr += str[i];
    }
  }
  return newstr;
}
const str ="rahhul";
console.log(removeDuplicates(str))