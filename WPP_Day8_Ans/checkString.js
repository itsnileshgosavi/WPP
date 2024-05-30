let str ='abc';

function checkStr(str){
    let first4four = str.slice(0,4);
    if(first4four==='Java' || first4four ==='java'){
        return true;
    }else {
        return false;
    }
}
console.log(checkStr(str));