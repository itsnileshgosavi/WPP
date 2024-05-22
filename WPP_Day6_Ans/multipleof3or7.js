let num = 21;

function isMulof3or7(num){
    if (num%3==0 && num%7==0) {
        return "number is multiple of both 3 and 7";
    } else if (num%7==0) {
        return "number is multiple of 7";
    }else if(num%3==0){
        return "number is multiple of 3"
    }
    else{
        return "number is neither multiple of 3 nor 7"
    }
}

console.log(isMulof3or7(num));