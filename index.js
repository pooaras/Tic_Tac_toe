let player1="x";
let player2="o";
let arr;
let turn=player1;
function myfun(val)
{

    console.log("clicked");
    arr=document.getElementById("board").querySelectorAll(".boardcell");
    if(turn==player1)
    {
        arr[val].innerHTML=player1;
         turn=player2;  
    }
    else if(turn==player2)
    {
        arr[val].innerHTML=player2;
        turn=player1;
    }
   
}
