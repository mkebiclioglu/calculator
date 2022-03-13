import Calculator from "./objects/calculator.js";

const numDisplay = document.querySelector(".display__numbers");
const aggDisplay = document.querySelector(".display__agg");
const numBtns = document.querySelectorAll(".btn--num");
const calc = new Calculator();

window.addEventListener('load', () => {
    numDisplay.innerText = calc.display;
    aggDisplay.innerText = calc.aggregate;
});

[...numBtns]
    .map(elem => elem.addEventListener('click', (e) => {
        calc.updateDisplay(e);
        numDisplay.innerText = calc.display;
        aggDisplay.innerText = calc.aggregate;
    }));