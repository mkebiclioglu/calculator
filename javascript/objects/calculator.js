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

    this.removeFromDisplay = function() {
        if (this.display == '0') {
            return;
        } else if (this.display.length > 1) {
            this.display = this.display
                .split('')
                .slice(0,this.display.length-1)
                .join('');
        } else if (this.display.length == 1) {
            this.display = '0';
        }
    };

    this.clearDisplay = function() {
        this.display = '0';
    }

    this.doSystemAction = function(e) {
        const sysBtnData = e.currentTarget.dataset.btn;
        if (sysBtnData == 'reset') {

        } else if (sysBtnData == 'clear') {
            this.clearDisplay();
        } else if (sysBtnData == 'delete') {
            this.removeFromDisplay();
        }
        if (e.currentTarget.classList.contains('btn')) {
            e.stopPropagation();
        }
    };
}

export default Calculator;