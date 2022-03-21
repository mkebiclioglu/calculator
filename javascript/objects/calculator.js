import { 
    isDuplicate,
} from '../functions.js'

function Calculator() {
    this.display = '0';
    this.aggregate = '0';
    this.firstEntry = undefined;
    this.secondEntry = undefined;
    this.operation = undefined;

    this.addToDisplay = function(e) {
        let btnVal = e.target.dataset.btn;
        if ((btnVal == '.' && isDuplicate('.', this.display)) || this.display.length > 7) {
            return
        } else if (this.display == '0' && btnVal != '.') {
            this.display = btnVal;
        } else if (this.display != '0') {
            this.display += btnVal;
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
    };

    this.clearMemory = function() {
        this.display = '0';
        this.aggregate = '0';
        this.firstEntry = undefined;
        this.secondEntry = undefined;
    };

    this.setOperation = function(e) {
        if (e.currentTarget.dataset.btn != 'equal') {
            this.operation = e.currentTarget.dataset.btn;
        }
    };
    
    this.doScreenMoves = function() {
        if (this.firstEntry == undefined && this.display != '0') {
            this.firstEntry = +this.display;
            this.aggregate = this.display;
            this.display = '0';
        } else if (this.secondEntry == undefined && this.display != '0') {
            this.secondEntry = +this.display;
        }
    };

    this.doSystemAction = function(e) {
        const sysBtnData = e.currentTarget.dataset.btn;
        if (sysBtnData == 'reset') {
            this.clearMemory();
        } else if (sysBtnData == 'clear') {
            this.clearDisplay();
        } else if (sysBtnData == 'delete') {
            this.removeFromDisplay();
        }
        if (e.currentTarget.classList.contains('btn')) {
            e.stopPropagation();
        }
    };

    this.doOperation = function(e) {
        if (this.firstEntry != undefined && this.secondEntry != undefined && this.operation != undefined) {
            switch (this.operation) {
                case 'add':
                    this.display = (this.firstEntry + this.secondEntry).toString();
                    break;
                case 'subtract':
                    this.display = (this.firstEntry - this.secondEntry).toString();
                    break;
                case 'multiply':
                    this.display = (this.firstEntry * this.secondEntry).toString();
                    break;
                case 'divide':
                    this.display = (this.firstEntry / this.secondEntry).toString();
                    break;
            }
            this.aggregate = '0';
            this.firstEntry = undefined;
            this.secondEntry = undefined;
            this.operation = undefined;
        }
        console.table(this);
    };
}

export default Calculator;