const date = new Date();

let day =date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();

let ampm;

if(hours>12){
    hours = hours - 12;
    ampm="PM"
}else if(hours==12){
    ampm="PM"
}else if(hours==0){
    hours=12;
    ampm="AM"
}
else{
    ampm = 'AM'
}
 
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

 let weekDays = ['Sunday' ,'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']

console.log("Today is: " + weekDays[day]);
console.log("Time is: " + hours + ":" + minutes + ":" + sec +' '+ ampm);


