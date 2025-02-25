let inputSlider = document.getElementById("inputslider");
let SliderValue = document.getElementById("slidervalue");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase");
let allNumber = document.getElementById("numbers");
let AllSymbol = document.getElementById("symbol");
let GenBtn = document.getElementById("genbtn");
let CopyIcon = document.getElementById("copy");
let passBox = document.querySelector(".passBox");

SliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  SliderValue.textContent = inputSlider.value;
});

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let allNum = "0123456789";
let allSymbol = "~!@#$%^&*";

GenBtn.addEventListener("click", () => {
  passBox.value = GeneratePassword();
});

let GeneratePassword = () => {
  GenPass = "";
  char = "";
  length = inputSlider.value;
  if (upperCase.checked) {
    char += upperChar;
  }

  if (lowerCase.checked) {
    char += lowerChar;
  }

  if (AllSymbol.checked) {
    char += allSymbol;
  }

  if (allNumber.checked) {
    char += allNum;
  }

  let i = 1;
  while (i <= length) {
    GenPass += char.charAt(Math.floor(Math.random() * char.length));
    i++;
  }
  return GenPass;
};

CopyIcon.addEventListener("click",()=>{
  navigator.clipboard.writeText(passBox.value);
  CopyIcon.innerText = "check";
  CopyIcon.title = "Copied";

  setTimeout(()=>{
    CopyIcon.innerText = "content_copy";
    CopyIcon.title = "";
  },3000)
})
