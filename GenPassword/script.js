let inputSlider = document.getElementById("inputslider");
let SliderValue = document.getElementById("slidervalue");

SliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',() =>{
    SliderValue.textContent = inputSlider.value;
})
