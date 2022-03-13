function Calculator() {
    this.display = 0;
    this.aggregate = 0;
    this.firstEntry = 0;
    this.secondEntry = 0;

    this.updateDisplay = function(e) {
        if (this.display == '0') {
            this.display = e.target.innerText;
        } else if (this.display != '0') {
            this.display += e.target.innerText;
        }
    };
}

export default Calculator;