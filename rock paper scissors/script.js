let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userId = document.querySelector("#user-score");
let CompId = document.querySelector("#comp-score");

let UserScore = 0;
let CompScore = 0;

let DrawGame = () =>{
    msg.innerText = `Game Was Draw`;
    msg.style.backgroundColor = '#2973B2';
}

let showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        UserScore++;
        userId.innerText = UserScore;
        msg.innerText = `Congrats , Your ${userchoice} beat ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        CompScore++;
        CompId.innerText = CompScore;
        msg.innerText = `Sorry , ${compChoice} beat Your ${userchoice}`;
        msg.style.backgroundColor = 'red';
    }
}

let genComChoice = () =>{
    let  options = ['rock' , 'paper' , 'scissors'];
    let randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}

let playGame = (userchoice) =>{
    console.log(`user choice = ${userchoice}`);
    let compChoice = genComChoice();
    console.log(`Comp choice = ${compChoice}`);
    if(userchoice === compChoice){
        // create draw function
        DrawGame();
    }
    else{
        let userWin = true;
        if(userchoice === 'rock'){
            if(compChoice === 'paper'){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        else if(userchoice === 'paper'){
            if(compChoice === 'rock'){
                userWin = true;   
            }
            else{
                userWin = false;
            }
        }
        else{
            if(compChoice === 'paper'){
                userWin = true;
            }else{
                userWin = false;
            }
        }
        showWinner(userWin,userchoice,compChoice);
    }
 }
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

