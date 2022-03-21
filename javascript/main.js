import Calculator from "./objects/calculator.js";

const numDisplay = document.querySelector(".display__numbers");
const aggDisplay = document.querySelector(".display__agg");
const numBtns = document.querySelectorAll(".btn--num");
const sysBtns = document.querySelectorAll(".btn--system");
const opBtns = document.querySelectorAll(".btn--operator");
const calc = new Calculator();

window.addEventListener('load', () => {
    numDisplay.innerText = calc.display;
    aggDisplay.innerText = calc.aggregate;
});


[...numBtns]
    .map(elem => elem.addEventListener('click', (e) => {
        calc.addToDisplay(e);
        numDisplay.innerText = calc.display;
        aggDisplay.innerText = calc.aggregate;
    }, {
        capture: false
    }));

[...sysBtns]
    .map(elem => elem.addEventListener('click', (e) => {
        calc.doSystemAction(e);
        numDisplay.innerText = calc.display;
        aggDisplay.innerText = calc.aggregate;
    }, {
        capture: false
    }));

[...opBtns]
    .map(elem => elem.addEventListener('click', (e) => {
        calc.doScreenMoves();
        calc.setOperation(e);
        calc.doOperation(e);
        numDisplay.innerText = calc.display;
        aggDisplay.innerText = calc.aggregate;
    }, {
        capture: false
    }));
