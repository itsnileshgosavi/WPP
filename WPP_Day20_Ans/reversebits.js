// JavaScript program to reverse the order of bits in an integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87
function mirror_bits(n) {
  // Convert number to binary and split into array of bits
  let t = n.toString(2).split("");

  // Get the length of the binary string
  let str_len = t.length;

  // Add leading zeroes to make the length of the binary string 8
  for (let i = 0; i < 8 - str_len; i++) {
      t.unshift("0");
  }

  // Reverse the bits and convert the binary string back to a number
  return parseInt(t.reverse().join(""), 2);
}

console.log(mirror_bits(14))