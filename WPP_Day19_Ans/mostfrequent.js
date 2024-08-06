function mostFrequent(arr) {
  let obj = {}
  let max = 0
  let maxKey = 0
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  for (let key in obj) {
    if (obj[key] > max) {   
      max = obj[key]  
      maxKey = key
    }
  }
  return maxKey 
}
const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
console.log(mostFrequent(array))