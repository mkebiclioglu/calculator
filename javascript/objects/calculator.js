function Calculator() {
    this.display = "0";
    this.aggregate = "0";
    this.firstEntry = 0;
    this.secondEntry = 0;

    this.setDisplay = (event) => {
        if (this.display == 0) {
            this.display = event.target.innerText;
        } else if (this.display.length == 7){
            return;
        } else {
            this.display += event.target.innerText;
        }
    };

    this.getDisplay = () => (this.display);
}

export default Calculator;