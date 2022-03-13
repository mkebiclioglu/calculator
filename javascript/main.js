import Calculator from "./objects/calculator.js";

const numDisplay = document.querySelector(".display__numbers");
const aggDisplay = document.querySelector(".display__agg");
const numBtns = document.querySelectorAll(".btn--num");

window.addEventListener('load', () => {
    const calc = new Calculator();
    numDisplay.innerText = calc.display;
    aggDisplay.innerText = calc.aggregate;
});

[...numBtns]
    .map(elem => elem.addEventListener('click', (e) => {
        
    }));