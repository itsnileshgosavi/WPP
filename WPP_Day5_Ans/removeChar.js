let string ="internnshala";

function removeChatAt(str, position){
    return str.slice(0 , position - 1) + str.slice(position)
}


console.log(removeChatAt(string, 6));