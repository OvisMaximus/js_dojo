function fill_gaps(inputArray) {
    let outputArray = [];
    let bracketName = undefined;
    for (let i = 0; i < inputArray.length; i++) {
        let currentValue = inputArray[i];
        if (currentValue !== null) {
            bracketName = currentValue;
        }
        outputArray.push(bracketName);
    }
    return outputArray;
}

module.exports = fill_gaps;