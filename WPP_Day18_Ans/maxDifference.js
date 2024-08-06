function maxDifference(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > max) {
        max = Math.abs(arr[i] - arr[j])
      }
    }
  }
  return max
}
const array = [5,6,8,6,7,2,8,,51,1]
console.log(maxDifference(array))