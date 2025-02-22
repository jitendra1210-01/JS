// access all element
let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");


// for alternative round
turn0 = true;

// winning pattern
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwiner();
    })
});

let disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let resetGame = () =>{
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");

}
const showWin = (winner) =>{
    msg.innerText = `Congratulation winner is ,  ${winner} 😁🥳`;
    msgContainer.classList.remove("hide");
    disable();
    
}
const checkwiner = () =>{
    for(let pattern of winningPattern){
        
        let pos1Val =   boxes[pattern[0]].innerText;
        let pos2Val =   boxes[pattern[1]].innerText;
        let pos3Val =   boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWin(pos1Val);
            }
        }
    }
}

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
