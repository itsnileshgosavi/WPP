
function swapends(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

const arr = [1,2,3,4,5];
console.log(swapends(arr));