
function isstrictMode(arr){
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]>=arr[i+1]){
      return false
    }
  }
  return true
}
const newarr =[24,22,31];
console.log(isstrictMode(newarr)?"Strict Mode":"Soft Mode")