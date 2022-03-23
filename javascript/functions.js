import { 
    RESULT_LEN,
 } from './constants.js';

export const isDuplicate = (searchTerm, target) => {
    let letters = [...target];
    return letters.includes(searchTerm);
};

export const roundedResult = (result) => {
    if (result.length > RESULT_LEN && result.indexOf('.') != -1) {
        if (result.substring(0,RESULT_LEN + 1).slice(-1) == '.') {
            return Math.round(+result)
                .toString()
                .substring(0,RESULT_LEN + 1);
        }
        return result.substring(0,RESULT_LEN + 1);
    } else if (result.length > RESULT_LEN) {
        return expo(result, 2).toString();
    }
    return result;
}

const expo = (x, f) => {
    return Number.parseFloat(x).toExponential(f);
}
  