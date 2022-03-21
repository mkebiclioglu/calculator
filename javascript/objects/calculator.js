import { 
    isDuplicate,
} from '../functions.js'

function Calculator() {
    this.display = '0';
    this.aggregate = '0';
    this.firstEntry = 0;
    this.secondEntry = 0;

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