let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset = () => {
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner) =>{
    msg.innerText =`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for (let pattern of winPat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                
                showWinner(pos1);
            }
        }
    }
};

newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);

