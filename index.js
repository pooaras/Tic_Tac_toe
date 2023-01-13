let player1="x";
let player2="o";
let arr;
let arr1=[];
let turn=player1;
let win=0;
window.addEventListener('load',function()
{   
    this.document.getElementById("turn").innerHTML="Turn : Player 1 : X";
    const board1=document.getElementById('board');
    board1.addEventListener('click',() => {
    // console.log("hi poo");
    // console.log("clicked pooaraz "+ arr1);
    if(win==0){
    for (let x = 0,y=0; x < 9,y<3; x+=3,y++) {
        // console.log(arr1[x]);
        if ( arr1[x]===arr1[x+1] && arr1[x+1]==arr1[x+2]  && arr1[x]!=undefined ) {
            win=1;
            this.document.getElementById("btn").style.display="inline-block";
            this.document.getElementById("txt").style.display="inline-block";
            if(turn==player1){
                this.document.getElementById("result").innerHTML="Player 2 Won..."
                console.log("player 2 : o win");}
            else {
                this.document.getElementById("result").innerHTML="Player 1 Won..."
                console.log("player 1 :xin");}
                }
            if ( arr1[y]==arr1[y+3] && arr1[y+3]==arr1[y+6]  && arr1[y]!=undefined )
            {
                win=1;
                this.document.getElementById("btn").style.display="inline-block";
                this.document.getElementById("txt").style.display="inline-block";
                if(turn==player1){
                    this.document.getElementById("result").innerHTML="Player 2 Won..."
                    console.log("player 2 : o win");}
                else {
                    this.document.getElementById("result").innerHTML="Player 1 Won..."
                    console.log("player 1 :xin");}
                    }
                }
            if(arr1[0]==arr1[4] && arr1[4]==arr1[8] && arr1[0]!=undefined  || arr1[2]==arr1[4] && arr1[4]==arr1[6] && arr1[2]!=undefined)
            {   
                win=1;
                this.document.getElementById("btn").style.display="inline-block";
                this.document.getElementById("txt").style.display="inline-block";
            if(turn==player1){
                this.document.getElementById("result").innerHTML="Player 2 Won..."
                console.log("player 2 : o win");}
            else {
                this.document.getElementById("result").innerHTML="Player 1 Won..."
                console.log("player 1 :xin");}

        }
    }
});
})
function myfun(val)
{
    
    arr=document.getElementById("board").querySelectorAll(".boardcell");
    let i=0,j=0;
    // for(i=0;i<9;i--)
    // {   
    //     if(arr[i]!=undefined)
    //         j++;
    //     if(j==8){
    //     }
       

    // }
    arr1.forEach((item)=>
    {
        if(item!=undefined) j++;
           
    })
    if(j==8)
    {
        this.document.getElementById("btn").style.display="inline-block";
        this.document.getElementById("txt").style.display="inline-block";
        this.document.getElementById("txt").innerHTML="Match draw ! Do you wanna play again?...";

    }
    if(turn==player1 && arr[val].value==undefined && win==0)
    {  
        
        // console.log(arr[val].value);
        arr[val].innerHTML=player1;
        arr[val].value=player1;
        arr1[val]=player1;
        turn=player2;  
    }
    else if(turn==player2 && arr[val].value==undefined && win==0)
    {
        arr[val].innerHTML=player2;
        arr[val].value=player2;
        arr1[val]=player2;
        turn=player1;
    }
    if(turn==player1)
    this.document.getElementById("turn").innerHTML="Turn : Player 1 : X";
    else if(turn==player2)
    this.document.getElementById("turn").innerHTML="Turn : Player 2 : O";
    
     
 }

