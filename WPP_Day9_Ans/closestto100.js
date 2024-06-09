function closeto100(x,y) {
    let a = Math.abs(x-100);
    let b =Math.abs( y-100);
    if (x>y) {
        return x;
    } else {
        return y;
    }
}


console.log(closeto100(95, 101));