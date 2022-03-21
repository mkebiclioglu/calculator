export const isDuplicate = (searchTerm, target) => {
    let letters = [...target];
    return letters.includes(searchTerm);
};

// Fix issue resulting in numbers ending with '.'.
export const roundedResult = (result) => {
    if (result.length > 7 && result.indexOf('.') != -1) {
        return result.substring(0,8);
    } else if (result.length > 7) {
        return expo(result, 2).toString();
    }
    return result;
}

const expo = (x, f) => {
    return Number.parseFloat(x).toExponential(f);
}
  