
let Random = Math.round(Math.random() * 10 ); 


const btn = document.querySelector("button");

document.querySelector("button").addEventListener("click",function handleClick() {
    const UserGuess =prompt("guess the number between 1 and 10");
    if(UserGuess==Random){
        alert("Good Work");
        btn.innerHTML="Start Again"
        Random = Math.round(Math.random() * 10 );
    }else{
        alert("Not Matched");
        btn.innerHTML="Try Again"
    }
    
} )

