let str = "JohnWick"

function manipulate(str){
    let newSt = str.slice(str.length-3);
    res = newSt+str+newSt
    return res;
}

console.log(manipulate(str))