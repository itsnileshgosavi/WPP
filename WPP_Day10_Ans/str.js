function convertstr(str) {
    if (str.length<3) {
        return str.toUpperCase()
    } else {
      return str.slice(0,3).toLowerCase() + str.slice(3); 
    }
}

console.log(convertstr(`INTERNSHALA`))