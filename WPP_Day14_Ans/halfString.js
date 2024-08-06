
function halfString(str) {
  let half = str.length / 2;
  const ans = str.slice(0, half);
  return ans;
}

const newstr = "Nilesh";
console.log(halfString(newstr)); 