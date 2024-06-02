let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetBtn");
let msgContainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector(".newBtn");
let msg=document.querySelector(".msg");

let turnO="true";

let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O"; 
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled="true";
        checkwinner();
    })
   
})
const disablebtn= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText=  `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
}

const checkwinner=( () => {
    for (let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
                console.log("winner",posval1);
                showWinner(posval1);
            }
        }
    }
})

const resetGameBtn=()=>{
    turnO=true;
    enablebtn();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGameBtn);
resetbtn.addEventListener("click",resetGameBtn);