let inputNumber = document.querySelector("#input");
let submitbtn = document.querySelector(".submit");
let msg = document.querySelector(".msg-container");
let PlayAgain = document.querySelector(".play-again");
let attempt = 0;

let CompNumber = Math.floor(Math.random() * 100);

submitbtn.addEventListener("click", () => {
  let userNumber = inputNumber.value.trim();
  if (userNumber === "") {
    msg.innerHTML = `⚠️ Please enter a valid number!`;
    msg.classList.remove("hide");
    msg.style.color = "red";
    return;
  }
  attempt++;
  if (userNumber == CompNumber) {
    msg.innerHTML = `Congrats !! You Guess Number ${CompNumber} in ${attempt} Attempts.`;
    msg.classList.remove("hide");
    submitbtn.classList.add("hide");
    PlayAgain.classList.remove("hide");
    PlayAgain.addEventListener("click", ResetGame);

    msg.style.color = "green";
  } else if (userNumber > CompNumber) {
    msg.innerHTML = `Your number is too High,Please Guess Low Number`;
    msg.classList.remove("hide");
    msg.style.color = "black";
  } else {
    msg.innerHTML = `Your number is too low,Please Guess High Number`;
    msg.classList.remove("hide");
    msg.style.color = "black";
  }
});

let ResetGame = () => {
  attempt = 0;
  msg.classList.add("hide");
  CompNumber = Math.floor(Math.random() * 10);
  msg.textContent = "";
  inputNumber.value = "";
  submitbtn.classList.remove("hide");
  PlayAgain.classList.add("hide");
};
