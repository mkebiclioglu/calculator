function Calculator() {
    this.display = '0';
    this.aggregate = '0';
    this.firstEntry = 0;
    this.secondEntry = 0;

    this.addToDisplay = function(e) {
        if (this.display == '0') {
            this.display = e.target.dataset.btn;
        } else if (this.display != '0') {
            this.display += e.target.dataset.btn;
        }
    };
}

export default Calculator;